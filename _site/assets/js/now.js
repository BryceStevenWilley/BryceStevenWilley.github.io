
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
    } else if (resp.type === 'ReleaseEvent') {
      if (resp.payload.action === 'published') {
        release = resp.payload.release;
        event_title.textContent = 'Released ' + release.name + ' of';
        addIndividualLines(release.body, event_desc);
      } else if (resp.payload.action === 'edited') {
        event_title.textContent = 'Edit release ' + release.name + ' of';
        addIndividualLines('New body: \n' + release.body, event_desc);
      }
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
    }

    document.querySelector('#if-updated').textContent = 'Updated when you loaded this page!'
    // TODO(brycew): do other things: https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types
  })