(function () {
    const storageKey = 'items';
    const stateKey = 'state';

    const tbody = document.querySelector('tbody');
    const tableElement = document.querySelector('.table');
    const beginButton = document.querySelector('.begin');
    const finishButton = document.querySelector('.finish');
    const messageElement = document.querySelector('.message');

    let items = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [];
    let appState = localStorage.getItem(stateKey) ? localStorage.getItem(storageKey) : '';
    
    const saveToLocalStorage = data => localStorage.setItem(storageKey, JSON.stringify(data));

    const toggleDone = e => {
        let item = items.find(i => i.name === e.target.textContent.replace(/\d+\.\s+/, ''));
        item.done = !item.done;
        e.currentTarget.classList.remove('table-danger');
        e.currentTarget.classList.toggle('table-success');
        saveToLocalStorage(items);
    };

    const makeElement = (item, index) => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td = document.createElement('td');
        td1.textContent = `${index + 1}.`;
        td.textContent = item.name;
        if (item.done) tr.classList.add('table-success');
        tr.addEventListener('click', toggleDone);
        tr.appendChild(td1);
        tr.appendChild(td);
        tbody.appendChild(tr);
    };

    const getChecklistItems = data => data.split('\n').filter(i => i);

    const toObject = name => { return { name }; };

    const removeAllChildNodes = parent => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const begin = () => {
        localStorage.setItem(stateKey, 'stared');
        saveToLocalStorage([]);
        startApp();
    };

    const finish = () => {
        let unChecked = items.filter(i => !i.done);
        if(unChecked.length) {
            Array.from(document.querySelectorAll('tr:not(.table-success)')).forEach(node=> node.classList.add('table-danger'))
            return;
        }
        localStorage.setItem(stateKey, '');
        saveToLocalStorage([]);
        removeAllChildNodes(tbody);
        messageElement.classList.remove('d-none');
        tableElement.classList.add('d-none');
        document.querySelector('.finish.btn').classList.add('d-none');
        items = [];
    };

    const startApp = () => {
        if(!messageElement.classList.contains('d-none')){
            messageElement.classList.add('d-none');
        }
        tableElement.classList.remove('d-none');
        document.querySelector('.finish.btn').classList.remove('d-none');
        fetch(`data.txt?t=${Math.floor(Date.now())}`)
            .then(response => response.text())
            .then(dataCallback);

        finishButton.addEventListener('click', finish);

        window.items = items;
    };

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

    if (appState !== 'stared') {
        messageElement.classList.remove('d-none');
        beginButton.addEventListener('click', begin);
        return;
    }

    startApp();
    window.onbeforeunload = function () {
        return "Are you sure?";
    }
})();
