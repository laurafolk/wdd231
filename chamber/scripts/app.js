document.getElementById('gridViewButton').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('list');
    document.querySelector('.container').classList.add('grid');
});

document.getElementById('listViewButton').addEventListener('click', function() {
    document.querySelector('.container').classList.remove('grid');
    document.querySelector('.container').classList.add('list');
});