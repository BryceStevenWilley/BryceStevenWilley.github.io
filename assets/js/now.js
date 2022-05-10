
function addIndividualLines(textStr, toElem) {
  while(toElem.firstChild) {
    toElem.removeChild(toElem.firstChild);
  }
  
  let lines = textStr.split('\n');

  for (let line of lines) {
    let line_elem = document.createElement('p');
    line_elem.textContent = line;
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
    console.log('%o', j);
    resp = j[0];
    let event_repo = document.querySelector('#event-repo');
    event_repo.textContent = resp.repo.name;
    event_repo.setAttribute('href', 'https://github.com/' + resp.repo.name);

    let event_title = document.querySelector('#event-title');
    let event_desc = document.querySelector('#event-desc');
    if (resp.type === 'PushEvent') {
      event_title.textContent = 'Pushed a commit';
      commit = resp.payload.commits[resp.payload.commits.length - 1];
      addIndividualLines(commit.message, event_desc);
    } else if (resp.type === 'CreateEvent') {
      addLinkToEvent(null, 'Created the ' + resp.payload.ref.ref + ' ' + resp.payload.ref_type, event_desc);
    } else if (resp.type === 'DeleteEvent') {
      addLinkToEvent(null, 'Deleted the ' + resp.payload.ref.ref + ' ' + resp.payload.ref_type, event_desc);
    } else if (resp.type === 'ForkEvent') {
      addLinkToEvent(null, 'Forked the ' + resp.payload.forkee.full_name + ' repo');
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
      if (resp.payload.action === 'opened') {
        event_title.textContent = 'Made a pull request';
        pr = resp.payload.pull_request;

        // TODO: add the URL of the PR
        addIndividualLines(pr.title + '\n\n' + pr.body, event_desc);
      } else if (resp.payload.action === 'closed') {
        event_title.textContent = 'Closed a pull request';
      } else if (resp.payload.action === 'reopened') {
        event_title.textContent = 'Reopened a pull request';
      } else if (resp.payload.action === 'assigned') {
        event_title.textContent = 'Assigned a pull request to ' + resp.payload.pull_request.assignee;
      } else if (resp.payload.action === 'unassigned') {
        event_title.textContent = 'Unassigned a pull request';
      } else if (resp.payload.action == 'review_request') {
        // TODO: add what these things to do
      } else if (resp.payload.action === 'review_request_removed') {
      } else if (resp.payload.action === 'labeled') {
      } else if (resp.payload.action === 'unlabeled') {
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