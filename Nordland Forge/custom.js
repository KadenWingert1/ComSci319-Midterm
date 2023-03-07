// Load the JSON data
fetch('custom.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const container = document.getElementById('customOrderR2');

    // Create a list for each array in the JSON data
    Object.keys(data).forEach(key => {
      const array = data[key];

      // Create a new div for the list and add the title
      const div = document.createElement('div');
      div.classList.add('row2', 'col1');
      container.appendChild(div);
      const title = document.createElement('h1');
      title.innerText = key;
      div.appendChild(title);

      // Add each item in the array to the div as a radio input and label
      array.forEach(item => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = item.toLowerCase().replace(' ', '');
        input.name = key;
        input.value = item;
        input.required = true;
        const label = document.createElement('label');
        label.for = input.id;
        label.innerText = item;
        div.appendChild(input);
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
      });
    });
  })
  .catch(error => console.error(error));
