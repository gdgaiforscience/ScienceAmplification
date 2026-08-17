const gridElement = document.getElementById('cards-grid');

// Loop through the data to build elements
dataResources.forEach(resource => {
  // 1. Create the card container (anchor link)
  const card = document.createElement('a');
  card.href = resource.link;
  card.className = 'card';
  card.target = '_blank'; // Opens in a new tab

  // 2. Create the header (Icon + Title)
  const header = document.createElement('div');
  header.className = 'card-header';
  
  const icon = document.createElement('img');
  icon.src = resource.icon;
  icon.alt = resource.title.replace(/\[.*?\]/g, '').trim() + ' icon';
  icon.className = 'card-icon';

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = resource.title;

  header.appendChild(icon);
  header.appendChild(title);

  // 3. Create the description text
  const desc = document.createElement('p');
  desc.className = 'card-desc';
  desc.textContent = resource.description;

  // 4. Create the tags container
  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'card-tags';
  resource.tags.forEach(tagText => {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = tagText;
    tagsContainer.appendChild(tag);
  });

  // Append everything to the card
  card.appendChild(header);
  card.appendChild(desc);
  card.appendChild(tagsContainer);

  // Append the card to the grid container
  gridElement.appendChild(card);
});
