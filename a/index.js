(function () {

    const storageKey = 'items';
    const table = document.querySelector('tbody');
    let items = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [];

    const saveToLocalStorage = data => localStorage.setItem(storageKey, JSON.stringify(data));

    const toggleDone = text => {
        let item = items.find(i => i.name === text.replace(/\d+\.\s+/, ''));
        item.done = !item.done;
        saveToLocalStorage(items);
    };

    const makeElement = (item, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td = document.createElement('td');
        td1.textContent = `${index + 1}.`;
        td.textContent = item.name;
        if (item.done) tr.classList.add('table-success');
        tr.addEventListener('click', e => {
            toggleDone(e.target.textContent);
            e.currentTarget.classList.toggle('table-success');
        });
        tr.appendChild(td1);
        tr.appendChild(td);
        table.appendChild(tr);
    };

    const getChecklistItems = data => data.split('\n').filter(i => i);

    const toObject = name => { return { name }; };

    const compareData = (data) => {
        let tempData = getChecklistItems(data);
        let added = tempData.filter(i => !items.map(i => i.name).includes(i));
        let removed = items.map(i => i.name).filter(i => !tempData.includes(i));
        if ((added.length || removed.length) && confirm("want to update?")) {
            items = tempData.map(toObject);
            saveToLocalStorage(items);
        }
    };

    let dataCallback = data => {
        let tempData = getChecklistItems(data).map(toObject);
        window.data = tempData;
        if (items.length) {
            compareData(data);
        } else {
            items = tempData;
            saveToLocalStorage(items);
        }
        items.forEach(makeElement);
    };

    fetch(`data.txt?t=${Math.floor(Date.now())}`)
        .then(response => response.text())
        .then(dataCallback);

    window.items = items;

})();

// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }
  
  // Code to handle install prompt on desktop
  
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');
  //addBtn.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      addBtn.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  });