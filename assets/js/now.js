
function addIndividualLines(textStr, toElem) {
  while(toElem.firstChild) {
    toElem.removeChild(toElem.firstChild);
  }

  if (textStr === null || textStr === '') {
    toElem.setAttribute('hidden', '');
    return;
  } else {
    toElem.removeAttribute('hidden'); 
  }
  
  let lines = textStr.split('\n');

  for (let line of lines) {
    let md_link = /\[([^\]]+)\]\(([^\)]+)\)/g;
    let match_obj = [...line.matchAll(md_link)];
    let line_elem = document.createElement('p');
    console.log('line: %s', line);
    console.log('match obj: %o', match_obj);
    if (match_obj) {
      let plain_split = /\[[^\]]+\]\([^\)]+\)/g;
      let split_arr = line.split(plain_split);
      console.log('split_arr: %o', split_arr);
      for (let i = 0; i < split_arr.length; i++) {
        if (split_arr[i]) {
          let span = document.createElement('span');
          span.textContent = split_arr[i];
          line_elem.appendChild(span);
        }

        if (i < match_obj.length) {
          let link = document.createElement('a');
          link.textContent = match_obj[i][1];
          link.setAttribute('href', match_obj[i][2]);
          line_elem.appendChild(link);
        }
      }
    } else {
      line_elem.textContent = line;
    }
    toElem.appendChild(line_elem);
  }
}

function addLinkToEvent(url, linkText, titleElem) {
  if (url !== null) {
    let link_elem = document.createElement('a');
    link_elem.setAttribute('href', url); 
    link_elem.textContent = linkText; 
    titleElem.textContent = '';
    titleElem.append(link_elem);
  } else {
    titleElem.textContent = linkText;
  }
}

// Thanks to https://javascript.info/fetch
fetch('https://api.github.com/users/brycestevenwilley/events?per_page=1')
  .then(response => response.json())
  .then(function (j){
    resp = j[0];
    console.log('%o', resp);
    let event_repo = document.querySelector('#event-repo');
    event_repo.textContent = resp.repo.name;
    const http_url = 'https://github.com/' + resp.repo.name;
    event_repo.setAttribute('href', http_url);

    let event_title = document.querySelector('#event-title');
    let event_desc = document.querySelector('#event-desc');
    addIndividualLines('', event_desc);
    if (resp.type === 'PushEvent') {
      commit = resp.payload.commits[resp.payload.commits.length - 1];
      let url = http_url + '/commit/' + commit.sha; 
      addLinkToEvent(url, 'Pushed a commit', event_title); 
      addIndividualLines(commit.message, event_desc);
    } else if (resp.type === 'CreateEvent') {
      let url = http_url + '/tree/' + resp.payload.ref;
      addLinkToEvent(url, 'Created the ' + resp.payload.ref + ' ' + resp.payload.ref_type, event_title);
    } else if (resp.type === 'DeleteEvent') {
      addLinkToEvent(null, 'Deleted the ' + resp.payload.ref + ' ' + resp.payload.ref_type, event_title);
    } else if (resp.type === 'ForkEvent') {
      addLinkToEvent(null, 'Forked the ' + resp.payload.forkee.full_name + ' repo', event_title);
    } else if (resp.type === 'ReleaseEvent') {
      if (resp.payload.action === 'published') {
        release = resp.payload.release;
        event_title.textContent = 'Released ' + release.name;
        addIndividualLines(release.body, event_desc);
      } else if (resp.payload.action === 'edited') {
        event_title.textContent = 'Edited release ' + release.name;
        addIndividualLines('New body: \n' + release.body, event_desc);
      }
    } else if (resp.type === 'IssuesEvent') {
      if (resp.payload.action === 'opened')  {
        addLinkToEvent(resp.payload.issue.html_url, 'Opened an issue', event_title);
        addIndividualLines(resp.payload.issue.title + '\n' + resp.payload.issue.body, event_desc);
      } else if (resp.payload.action === 'edited') {
        addLinkToEvent(resp.payload.issue.html_url, 'Edited an issue', event_title);
        addIndividualLines(resp.payload.issue.title + '\n' + resp.payload.issue.body, event_desc);
      } else if (resp.payload.action === 'closed') {
        addLinkToEvent(resp.payload.issue.html_url, 'Closed an issue', event_title);
        addIndividualLinks(resp.payload.issue.title + '\n' + resp.payload.issue.body, event_desc);
      } else if (resp.payload.action === 'reopened') {
        addLinkToEvent(resp.payload.issue.html_url, 'Reopened an issue', event_title);
        addIndividualLinks(resp.payload.issue.title + '\n' + resp.payload.issue.body, event_desc);
      } else if (resp.payload.action === 'assigned') {
        addLinkToEvent(resp.payload.issue.html_url, 'Assigned an issue to ' + resp.payload.assignee, event_title);
        addIndividualLinks("", event_desc);
      } else if (resp.payload.action === 'labeled') {
        addLinkToEvent(resp.payload.issue.html_url, 'Added the ' + resp.payload.label + ' label to an issue', event_title);
        addIndividualLinks("", event_desc);
      } else if (resp.payload.action === 'unlabeled') {
        addLinkToEvent(resp.payload.issue.html_url, 'Removed the ' + resp.payload.label + ' label from an issue', event_title);
        addIndividualLinks("", event_desc);
      }
    } else if (resp.type === 'IssueCommentEvent') {
      addLinkToEvent(resp.payload.comment.html_url, 'Made a comment', event_title);
      addIndividualLines(resp.payload.comment.body, event_desc);
    } else if (resp.type === 'PullRequestEvent') {
      const pr_url = http_url + '/pull/' + resp.payload.number;
      let pr = resp.payload.pull_request;
      if (resp.payload.action === 'opened') {
        addLinkToEvent(pr_url, 'Made a pull request', event_title);
        addIndividualLines(pr.title + '\n\n' + pr.body, event_desc);
      } else if (resp.payload.action === 'closed') {
        addLinkToEvent(pr_url, 'Closed a pull request', event_title);
      } else if (resp.payload.action === 'reopened') {
        addLinkToEvent(pr_url, 'Reopened a pull request', event_title);
      } else if (resp.payload.action === 'assigned') {
        addLinkToEvent(pr_url, 'Assigned a pull request to ' + resp.payload.pull_request.assignee, event_title);
      } else if (resp.payload.action === 'unassigned') {
        addLinkToEvent(pr_url, 'Unassigned a pull request', event_title);
      } else if (resp.payload.action == 'review_request') {
        // TODO: add what these things to do
      } else if (resp.payload.action === 'review_request_removed') {
      } else if (resp.payload.action === 'labeled') {
        addLinkToEvent(pr_url, 'Labeled a pull request', event_title);
      } else if (resp.payload.action === 'unlabeled') {
        addLinkToEvent(pr_url, 'Unlabeled a pull request', event_title);
      }
    } else if (resp.type === 'PullRequestReviewEvent') {
      event_title.textContent = 'Reviewed a pull request';
      addIndividualLines("", event_desc);
    } else if (resp.type === 'PullRequestCommentEvent') {
      event_title.textContent = 'Commented on a pull request';
      addIndividualLines("", event_desc);
    } else if (resp.type === 'PullRequestReviewThreadEvent') {
      event_title.textContent = resp.payload.action + ' a pull request comment thread';
    }

    document.querySelector('#if-updated').textContent = 'Updated when you loaded this page!'
    // TODO(brycew): do other things: https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types
  })