console.log("hi")

// Thanks to https://javascript.info/fetch
fetch('https://api.github.com/users/brycestevenwilley/events?per_page=1')
  .then(response => response.json())
  .then(function (j){
    console.log('%o', j);
    resp = j[0];
    event_repo = document.querySelector('#event-repo');
    event_repo.textContent = resp.repo.name;
    event_repo.setAttribute('href', 'https://github.com/' + resp.repo.name);
    event_title = document.querySelector('#event-title');
    if (resp.type === 'PushEvent') {
      event_title.textContent = 'Pushed a commit';
      commit = resp.payload.commits[resp.payload.commits.length - 1];
      lines = commit.message.split('\n');

      let event_desc = document.querySelector('#event-desc');

      while(event_desc.firstChild) {
        event_desc.removeChild(event_desc.firstChild);
      }
    
      for (let line of lines) {
        let line_elem = document.createElement('p');
        line_elem.textContent = line;
        event_desc.appendChild(line_elem);
      }
    }

    document.querySelector('#if-updated').textContent = 'Updated when you loaded this page!'
    // TODO(brycew): do other things: https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types
  })