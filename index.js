const justificativas = [
  {
    nome: "Samuel Bitencourt",
    matricula: "839583",
    local: "Matriz",
    mensagem: "Realizei um ajuste no ponto devido a uma inconsistência no horário registrado.",
    timestamp: "08:03 - 21/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Sexta, 20/09/2024",
    editedHour: "08:00",
    totalBefore: "-07:00",
    totalAfter: "08:00",
    status: "Pendente"
  },
  {
    nome: "Flávio Pereira",
    matricula: "734829",
    local: "Filial",
    mensagem: "Esqueci de registrar o ponto na entrada.",
    timestamp: "09:15 - 18/09/24",
    adjustmentType: "Inclusão de batida",
    day: "Quarta, 18/09/2024",
    editedHour: "09:00",
    totalBefore: "-06:00",
    totalAfter: "07:00",
    status: "Pendente"
  },
  {
    nome: "Maria Silva",
    matricula: "948362",
    local: "Matriz",
    mensagem: "Corrigi meu ponto devido a atraso no sistema.",
    timestamp: "11:22 - 15/06/24",
    adjustmentType: "Desconsiderar batida",
    day: "Segunda, 15/09/2024",
    editedHour: "08:10",
    totalBefore: "-07:30",
    totalAfter: "07:45",
    status: "Pendente"
  },
  {
    nome: "Lucas Almeida",
    matricula: "563728",
    local: "Filial",
    mensagem: "Atestado médico",
    timestamp: "10:45 - 12/06/24",
    adjustmentType: "Abono",
    day: "Quinta, 12/09/2024",
    editedHour: "07:50",
    totalBefore: "-06:50",
    totalAfter: "07:00",
    file: true, 
    reason: "Atestado médico",
    status: "Pendente"
  },
  {
    nome: "Carla Mendes",
    matricula: "273849",
    local: "Matriz",
    mensagem: "Adicionei uma batida esquecida.",
    timestamp: "09:05 - 10/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Terça, 10/09/2024",
    editedHour: "08:05",
    totalBefore: "-07:45",
    totalAfter: "08:00",
    status: "Pendente"
  },
  {
    nome: "Ricardo Costa",
    matricula: "637492",
    local: "Filial",
    mensagem: "Alteração devido a uma reunião externa.",
    timestamp: "16:30 - 09/06/24",
    adjustmentType: "Desconsiderar batida",
    day: "Segunda, 09/09/2024",
    editedHour: "13:30",
    totalBefore: "-05:30",
    totalAfter: "06:30",
    status: "Pendente"
  },
  {
    nome: "Fernanda Souza",
    matricula: "485920",
    local: "Matriz",
    mensagem: "Modifiquei o ponto devido a falha no registro.",
    timestamp: "08:20 - 05/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Quinta, 05/09/2024",
    editedHour: "07:55",
    totalBefore: "-07:40",
    totalAfter: "07:55",
    status: "Pendente"
  },
  {
    nome: "Paulo Lima",
    matricula: "283947",
    local: "Filial",
    mensagem: "Esqueci de marcar a saída e ajustei manualmente.",
    timestamp: "17:15 - 04/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Quarta, 04/09/2024",
    editedHour: "17:00",
    totalBefore: "-08:00",
    totalAfter: "08:15",
    status: "Pendente"
  },
  {
    nome: "Bruna Oliveira",
    matricula: "293847",
    local: "Matriz",
    mensagem: "Inclusão de batida para compensar horas.",
    timestamp: "08:50 - 02/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Segunda, 02/09/2024",
    editedHour: "08:10",
    totalBefore: "-07:30",
    totalAfter: "08:00",
    status: "Pendente"
  },
  {
    nome: "Tiago Ribeiro",
    matricula: "948372",
    local: "Filial",
    mensagem: "Ajustei o ponto por esquecimento de marcação.",
    timestamp: "09:25 - 01/06/24",
    adjustmentType: "Inclusão de batida",
    day: "Sexta, 01/09/2024",
    editedHour: "09:00",
    totalBefore: "-07:15",
    totalAfter: "07:30",
    status: "Pendente"
  },
  {
    nome: "Ana Costa",
    matricula: "123456",
    local: "Matriz",
    mensagem: "Atestado médico por um dia.",
    timestamp: "10:00 - 20/09/24",
    adjustmentType: "Abono",
    day: "Quinta, 20/09/2024",
    editedHour: "00:00",
    totalBefore: "-08:00",
    totalAfter: "08:00",
    file: true,
    reason: "Atestado médico",
    status: "Pendente"
  },
  {
    nome: "João Silva",
    matricula: "345678",
    local: "Filial",
    mensagem: "Cheguei mais tarde devido a uma consulta médica.",
    timestamp: "09:30 - 10/10/24",
    adjustmentType: "Abono",
    day: "Quinta, 10/10/2024",
    editedHour: "09:00",
    totalBefore: "-07:00",
    totalAfter: "08:00",
    file: true,
    reason: "Consulta médica",
    status: "Pendente"
  },
  {
    nome: "Jorge Nascimento",
    matricula: "654321",
    local: "Filial",
    mensagem: "Esqueci de registrar a entrada.",
    timestamp: "08:15 - 19/09/24",
    adjustmentType: "Inclusão de batida",
    day: "Quarta, 19/09/2024",
    editedHour: "08:00",
    totalBefore: "-07:00",
    totalAfter: "08:00",
    status: "Pendente"
  },
  {
    nome: "Renata Almeida",
    matricula: "789012",
    local: "Matriz",
    mensagem: "Corrigi um erro no registro anterior.",
    timestamp: "09:30 - 17/09/24",
    adjustmentType: "Desconsiderar batida",
    day: "Terça, 17/09/2024",
    editedHour: "09:15",
    totalBefore: "-07:30",
    totalAfter: "08:00",
    status: "Pendente"
  },
  {
    nome: "Felipe Oliveira",
    matricula: "890123",
    local: "Filial",
    mensagem: "Ajuste no ponto por motivo pessoal.",
    timestamp: "10:50 - 16/09/24",
    adjustmentType: "Inclusão de batida",
    day: "Segunda, 16/09/2024",
    editedHour: "10:00",
    totalBefore: "-06:30",
    totalAfter: "07:30",
    status: "Pendente"
  },
  {
    nome: "Camila Torres",
    matricula: "901234",
    local: "Matriz",
    mensagem: "Atestado médico por um dia inteiro.",
    timestamp: "11:15 - 15/09/24",
    adjustmentType: "Abono",
    day: "Domingo, 15/09/2024",
    editedHour: "00:00",
    totalBefore: "-08:00",
    totalAfter: "08:00",
    file: true,
    reason: "Atestado médico",
    status: "Pendente"
  },
  {
    nome: "Roberto Santos",
    matricula: "876543",
    local: "Matriz",
    mensagem: "Folga por doação de sangue",
    timestamp: "10:00 - 14/10/24",
    adjustmentType: "Abono",
    day: "Segunda, 14/10/2024",
    editedHour: "00:00",
    totalBefore: "-08:00",
    totalAfter: "08:00",
    file: true,
    reason: "Doação de sangue",
    status: "Pendente"
  }
];



// Helper to create a new row from template and populate with data
function createRowFromTemplate(templateRow, justificativa, index) {
  const newRow = templateRow.cloneNode(true);
  newRow.style.display = ""; // Make it visible
  newRow.removeAttribute("id"); // Remove id to avoid duplicates
  newRow.id = `item${index}`; // Unique id
  populateRowData(newRow, justificativa);
  return newRow;
}

// Helper to populate row data
function populateRowData(row, justificativa, tableType) {
  const elementsMap = {
    '[data-name]': justificativa.nome,
    '[data-employee-id]': justificativa.matricula,
    '[data-local]': justificativa.local,
    '[data-message]': justificativa.mensagem,
    '[data-timestamp]': justificativa.timestamp,
    '[data-adjustment-type]': justificativa.adjustmentType,
    '[data-day]': justificativa.day,
    '[data-edited-hour]': justificativa.editedHour,
    '[data-total-before]': justificativa.totalBefore,
    '[data-total-after]': justificativa.totalAfter,
    '[data-status]': justificativa.status
  };

  for (let selector in elementsMap) {
    const element = row.querySelector(selector);
    if (element) { // Only set text if the element exists
      element.textContent = elementsMap[selector];
    }
  }

  if (justificativa.file) {
    const fileButton = row.querySelector("[data-file-button]");
    if (fileButton) fileButton.classList.remove('hidden');
  }
  
  if (justificativa.reason) {
    const reasonElement = row.querySelector("[data-reason]");
    if (reasonElement) reasonElement.textContent = justificativa.reason;
  }

  // Set the id for the "see more" button
  const seeMoreButton = row.querySelector("[data-tr-index]");
  if (seeMoreButton) {
    seeMoreButton.id = `see-more-${row.id}`;
  }

  row.classList.add('justificativa-item');
}

// Renders a table (fast or complete) based on a given table body and template row
function renderTable(tableBodyId, templateRowId, tableType) {
  const tableBody = document.getElementById(tableBodyId);
  const templateRow = document.getElementById(templateRowId);

  if (!templateRow) {
    console.error(`Template row with id "${templateRowId}" not found.`);
    return;
  }

  justificativas.forEach((justificativa, index) => {
    const newRow = templateRow.cloneNode(true);
    newRow.style.display = ""; // Make it visible
    newRow.removeAttribute("id"); // Remove id to avoid duplicates
    newRow.id = `item${index}`; // Unique id

    populateRowData(newRow, justificativa, tableType);
    tableBody.appendChild(newRow);
  });

  if (tableType === 'fast') {
    addClickHandlersToRows('.justificativa-item');
    autoSelectFirstItem('.justificativa-item');
  }
}

// Add event listeners to table rows for selection
function addClickHandlersToRows(selector) {
  const items = document.querySelectorAll(selector);
  items.forEach((item) => {
    item.addEventListener('click', () => handleRowSelection(item, items));
  });
}

// Handles row selection logic
function handleRowSelection(item, items) {
  const currentItem = document.querySelector('.justificativa-item.selected');
  if (currentItem) {
    currentItem.classList.remove('selected');
  }
  item.classList.add('selected');
}

// Auto-selects the first item in the table
function autoSelectFirstItem(selector) {
  const items = document.querySelectorAll(selector);
  if (items.length > 0) {
    items[0].classList.add('selected');
  }
}

// Handles approval, denial, and other actions from buttons
function handleButtonClicks() {
  document.addEventListener('click', (e) => {
    const clickedButton = e.target.closest('.button-aproved, .button-deny, .button-file, .button-voltar');
    if (clickedButton) {
      const justificativaItem = clickedButton.closest('.justificativa-item');
      if (justificativaItem) {
        processButtonAction(clickedButton, justificativaItem);
      }
    }
  });
}

// Process action based on button type (approve, deny, etc.)
function processButtonAction(button, item) {
  const statusContainer = item.querySelector('.status');
  if (!statusContainer) return;

  const isFastTable = document.getElementById("fast-table");
  const nextItem = item.nextElementSibling;

  if (button.classList.contains('button-aproved')) {
    updateStatus(item, 'Aprovado', false, 'green');
    if (isFastTable && nextItem) {
      nextItem.classList.add('selected');
    }
  }

  if (button.classList.contains('button-deny')) {
    enterDenyMode(item);
  }

  if (button.classList.contains('button-voltar')) {
    exitDenyMode(item);
  }

  if (button.classList.contains('button-file')) {
    showFileModal();
  }
}

// Helper to update status
function updateStatus(item, statusText, reason, color) {
  const statusContainer = item.querySelector('.status');
    if  (reason) {
      statusContainer.innerHTML = `
      <p class="flex items-center justify-center text-${color}-500 font-bold space-x-1">
        <span class="material-symbols-outlined text-sm">check_circle</span>
        <span class="status-text">${statusText}</span>
      </p>
      <p class="text-gray">${reason}</p>`
    }
    else {
      statusContainer.innerHTML = `
      <p class="flex items-center justify-center text-${color}-500 font-bold space-x-1">
        <span class="material-symbols-outlined text-sm">check_circle</span>
        <span class="status-text">${statusText}</span>
      </p>`
    }
  item.classList.remove('selected');
}

// Handles entering denial mode
function enterDenyMode(item) {
  item.classList.add('recusa-mode');
  const reasonInput = item.querySelector('#recusa-motivo');
  reasonInput.focus();

  const form = item.querySelector('.recusa-form form');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const reason = reasonInput.value;
    
    // Update the status in both the modal and the row
    updateStatus(item, `Recusado:`, reason, 'red');

    // Hide the recusa form and exit denial mode
    item.classList.remove('recusa-mode');
    
    // Auto-select the next item in the list if it exists
    const nextItem = item.nextElementSibling;
    if (nextItem) {
      item.classList.remove('selected');
      nextItem.classList.add('selected');
    }
  });
}

// Handles exiting denial mode
function exitDenyMode(item) {
  item.classList.remove('recusa-mode');
}

// Displays file modal
function showFileModal() {
  const fileModal = document.getElementById('fileModal');
  fileModal.classList.remove('hidden');
}
// Close file modal
document.addEventListener('click', (e) => {
  const fileModal = document.getElementById('fileModal');
  if (e.target.id === 'cancelModal' || e.target.classList.contains('modal-background')) {
    fileModal.classList.add('hidden');
  }
}); 

// Initialize event listeners and render tables
document.addEventListener("DOMContentLoaded", () => {
  renderTable("complete-table-body", "complete-template-row", 'complete');
  renderTable("fast-table-body", "fast-template-row", 'fast');
  handleButtonClicks();
});

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    // Get the current selected item
    const selectedItem = document.querySelector('.justificativa-item.selected');

    // Log to check which key is pressed and if an item is selected
    console.log(`Key pressed: ${e.key}, Selected item: ${selectedItem ? selectedItem.id : 'none'}`);

    if (selectedItem) {
      // Check if the Enter key is pressed
      if (e.key === 'Enter') {
        const aprovarButton = selectedItem.querySelector('.button-aproved');
        if (aprovarButton) {
          aprovarButton.click();
        }
        const nextItem = selectedItem.nextElementSibling;
        if (nextItem) {
          selectedItem.classList.remove('selected');
          nextItem.classList.add('selected');
        }
      }

      // Check if the ESC key is pressed
      if (e.key === 'Escape') {
        const backButton = selectedItem.querySelector('.back');
        if (backButton) {
          backButton.click();
        }
      }

      // Check if the Delete key is pressed
      if (e.key === 'Delete') {
        const recusarButton = selectedItem.querySelector('.button-deny');
        if (recusarButton) {
          recusarButton.click();
        }
      }

      // Check if the Space key is pressed
      if (e.key === ' ') {  // Space key should be detected as ' '
        const apuracaoButton = selectedItem.querySelector('.button-apuracao');
        if (apuracaoButton) {
          apuracaoButton.click();
        }
      }

      // Check if the Up arrow is pressed
      if (e.key === 'ArrowUp') {
        const previousItem = selectedItem.previousElementSibling;
        if (previousItem) {
          selectedItem.classList.remove('selected');
          previousItem.classList.add('selected');
        }
      }

      // Check if the Down arrow is pressed
      if (e.key === 'ArrowDown') {
        const nextItem = selectedItem.nextElementSibling;
        if (nextItem) {
          selectedItem.classList.remove('selected');
          nextItem.classList.add('selected');
        }
      }

      // Check if Ctrl + Enter is pressed (for file)
      if (e.ctrlKey && e.key === 'Enter') {
        console.log("Ctrl + Enter pressed");
        const seeFileButton = selectedItem.querySelector('.button-file');
        if (seeFileButton) {
          seeFileButton.click();
        }
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`); // Log the key press
    
    // Check if the ESC key is pressed
    if (e.key === 'Escape') {
      // Find any visible recusa form
      const visibleRecusaForm = document.querySelector('.recusa-form:not(.hidden)');
      
      if (visibleRecusaForm) {
        console.log("Visible recusa form found"); // Log if a recusa form is found
        const voltarButton = visibleRecusaForm.querySelector('.button-voltar');
        
        if (voltarButton) {
          console.log("Voltar button found, directly triggering the processButtonAction"); // Log if the "Voltar" button is found

          // Call processButtonAction directly
          const justificativaItem = voltarButton.closest('.justificativa-item');
          if (justificativaItem) {
            processButtonAction(voltarButton, justificativaItem);  // Trigger the function directly
          }
        } else {
          console.log("Voltar button not found"); // Log if the "Voltar" button is not found
        }
      } else {
        console.log("No visible recusa form found"); // Log if no visible recusa form is found
      }
    }
  });
});

// Make the horizonal scroll work
document.addEventListener("DOMContentLoaded", function () {
  const scrollableTable = document.querySelector(".scrollable-table");
  const gradientLeft = document.querySelector(".scroll-gradient-left");
  const gradientRight = document.querySelector(".scroll-gradient-right");

  function checkScrollPosition() {
    const scrollLeft = scrollableTable.scrollLeft;
    const maxScrollLeft = scrollableTable.scrollWidth - scrollableTable.clientWidth;

    // Show or hide the left gradient
    if (scrollLeft === 0) {
      gradientLeft.classList.add("hidden");
    } else {
      gradientLeft.classList.remove("hidden");
    }

    // Show or hide the right gradient
    if (scrollLeft >= maxScrollLeft) {
      gradientRight.classList.add("hidden");
    } else {
      gradientRight.classList.remove("hidden");
    }
  }

  // Initial check in case the table is already scrolled
  checkScrollPosition();

  // Add event listener for scrolling
  scrollableTable.addEventListener("scroll", checkScrollPosition);
});

// Handle the checkbox selection
document.addEventListener('DOMContentLoaded', function () {
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const headUnchecked = document.getElementById('head-unchecked');
  const headChecked = document.getElementById('head-checked');
  const approveAllButton = document.getElementById('button-approved-all');
  const selectedItemsSpan = document.querySelector('[data-selecionados]');
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmApproveButton = document.getElementById('confirmApprove');
  const cancelModalButton = document.getElementById('cancelModal');

  /**
   * Updates the header status based on the number of selected checkboxes.
   */
  function updateHeaderStatus() {
      const checkedCount = document.querySelectorAll('.item-checkbox:checked').length;
      
      if (checkedCount > 0) {
          headUnchecked.style.display = 'none';
          headChecked.style.display = 'table-row';
      } else {
          headUnchecked.style.display = 'table-row';
          headChecked.style.display = 'none';
      }

      // Update the number of selected items in the span
      selectedItemsSpan.textContent = `${checkedCount} ${checkedCount === 1 ? 'item selecionado' : 'itens selecionados'}`;
  }

  /**
   * Updates the "Select All" checkbox state based on the status of the individual checkboxes.
   */
  function updateSelectAllCheckbox() {
      const totalItems = document.querySelectorAll('.item-checkbox').length;
      const checkedItems = document.querySelectorAll('.item-checkbox:checked').length;

      selectAllCheckbox.checked = (totalItems === checkedItems && totalItems > 0);
      selectAllCheckbox.indeterminate = (checkedItems > 0 && checkedItems < totalItems);
  }

  /**
   * Toggles the state of all item checkboxes based on the "Select All" checkbox.
   */
  function toggleAllCheckboxes(isChecked) {
      document.querySelectorAll('.item-checkbox').forEach(checkbox => {
          checkbox.checked = isChecked;
          checkbox.dispatchEvent(new Event('change'));  // Trigger the change event manually
      });
  }

  /**
   * Updates the status of selected items to "Aprovado" in the table.
   */
  function approveSelectedItems() {
      document.querySelectorAll('.item-checkbox:checked').forEach(checkbox => {
          const justificativaItem = checkbox.closest('.justificativa-item');
          if (justificativaItem) {
              const statusContainer = justificativaItem.querySelector('.status');
              if (statusContainer) {
                  statusContainer.innerHTML = '';
                  const newStatusP = document.createElement('p');
                  const newStatus = document.createElement('span');
                  newStatus.textContent = 'Aprovado';
                  const xIcon = document.createElement('span');
                  xIcon.classList.add('material-symbols-outlined', 'text-sm');
                  xIcon.textContent = 'check_circle';
                  newStatusP.classList.add('flex', 'items-center', 'justify-center', 'text-green-500', 'font-bold', 'space-x-1');
                  newStatusP.appendChild(xIcon);
                  newStatusP.appendChild(newStatus);
                  statusContainer.appendChild(newStatusP);
              }
          }
      });
  }

  /**
   * Adds event listeners to all individual checkboxes.
   */
  function addCheckboxListeners() {
      const itemCheckboxes = document.querySelectorAll('.item-checkbox');
      
      itemCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', function () {
              updateSelectAllCheckbox();  // Update "Select All" checkbox state
              updateHeaderStatus();  // Update header status and selected items span
          });
      });
  }

  /**
   * Observe the table for dynamically added checkboxes and add listeners when they are available.
   */
  function observeTable() {
      const tableBody = document.getElementById('complete-table-body'); // Update with your table's actual body id

      const observer = new MutationObserver((mutations) => {
          mutations.forEach(mutation => {
              if (mutation.addedNodes.length > 0) {
                  addCheckboxListeners();  // Add listeners to new checkboxes
                  updateSelectAllCheckbox();  // Update "Select All" state
                  updateHeaderStatus();  // Update header status
              }
          });
      });

      observer.observe(tableBody, { childList: true, subtree: true });
  }

  // Initial Setup
  selectAllCheckbox.addEventListener('change', function () {
      toggleAllCheckboxes(selectAllCheckbox.checked);
  });

  approveAllButton.addEventListener('click', function () {
      confirmationModal.classList.remove('hidden');
  });

  confirmApproveButton.addEventListener('click', function () {
      confirmationModal.classList.add('hidden');
      approveSelectedItems();  // Approve selected items
  });

  cancelModalButton.addEventListener('click', function () {
      confirmationModal.classList.add('hidden');
  });

  // Initial update of header, "Select All" checkbox, and selected items span
  addCheckboxListeners();  // Add listeners to existing checkboxes
  updateHeaderStatus();
  updateSelectAllCheckbox();
  
  observeTable();  // Start observing for new rows
});


// Handle opening the "Detalhes da Justificativa" modal
document.addEventListener('click', function (e) {
  const seeMoreButtons = e.target.closest('.button-see-more');
  const justificativaModal = document.getElementById('justificativaModal');

  if (seeMoreButtons) {
    let btnID = seeMoreButtons.id; // Get the index of the justification
    let index = btnID.replace(/^see-more-item/, '');  
    const justificativa = justificativas[index]; // Fetch the specific justificativa data

    if (!justificativa) return;

    // Populate modal with the justification data
    justificativaModal.querySelector('[data-modal-nome]').textContent = justificativa.nome;
    justificativaModal.querySelector('[data-modal-matricula]').textContent = justificativa.matricula;
    justificativaModal.querySelector('[data-modal-local]').textContent = justificativa.local;
    justificativaModal.querySelector('[data-modal-mensagem]').textContent = justificativa.mensagem;
    justificativaModal.querySelector('[data-modal-timestamp]').textContent = justificativa.timestamp;
    justificativaModal.querySelector('[data-modal-adjustmentType]').textContent = justificativa.adjustmentType;
    justificativaModal.querySelector('[data-modal-day]').textContent = justificativa.day;
    justificativaModal.querySelector('[data-modal-editedHour]').textContent = justificativa.editedHour;
    justificativaModal.querySelector('[data-modal-status]').textContent = justificativa.status;

    justificativaModal.classList.remove('hidden'); // Show the modal

    // Add event listeners to modal buttons
    const approveButton = justificativaModal.querySelector('.button-aproved');
    const denyButton = justificativaModal.querySelector('.button-deny');

    // Reuse the existing processButtonAction function for Approve and Deny
    approveButton.onclick = function () {
      const justificativaItem = document.getElementById(`item${index + 1}`);
      if (justificativaItem) {
        processButtonAction(approveButton, justificativaItem); // Approve action
        justificativaModal.classList.add('hidden'); // Close the modal
      } else {
        console.error('Could not find justificativaItem for approval.');
      }
    };

    denyButton.onclick = function () {
      const justificativaItem = document.getElementById(`item${index + 1}`);
      if (justificativaItem) {
        processButtonAction(denyButton, justificativaItem); // Deny action
        justificativaModal.classList.add('hidden'); // Close the modal
      } else {
        console.error('Could not find justificativaItem for denial.');
      }
    };
  }

  // Close modal on "Fechar" or when clicking outside
  if (e.target.id === 'closeModalButton' || e.target.id === `justificativaModal`) {
    justificativaModal.classList.add('hidden'); // Close the modal
  }
});

// Handle filters
document.addEventListener('DOMContentLoaded', function () {
  const applyFilterButton = document.querySelector('button.filter-button');
  const clearFilterButton = document.querySelector('.close-filter-button'); // Select the clear filters button
  var tableBody = document.getElementById('complete-table-body');
  if (!tableBody) tableBody = document.getElementById('fast-table-body');
  var templateRow = document.getElementById('complete-template-row'); // Ensure template row is defined
  if (!templateRow) templateRow = document.getElementById('fast-template-row');


  applyFilterButton.addEventListener('click', function() {
    console.log('Filter button clicked!'); // This will confirm the click event

    const startDateInput = document.getElementById('start-date').value;
    const endDateInput = document.getElementById('end-date').value;

    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);
    const status = document.getElementById('status').value;

    console.log(`Start Date: ${startDate}, End Date: ${endDate}, Status: ${status}`);

    // Filter the justificativas array based on selected filters
    const filteredJustificativas = justificativas.filter(j => {
      // Convert the 'day' format to a recognizable date
      const dayParts = j.day.split(', ')[1].split('/');
      const justificationDate = new Date(`${dayParts[2]}-${dayParts[1]}-${dayParts[0]}`); // format: YYYY-MM-DD

      // Log the justification date
      console.log(`Justification for ${j.nome}: ${justificationDate}`);

      // Log the matching conditions
      const matchesStatus = status === 'Todos' || j.status === status;
      const matchesStartDate = isNaN(startDate) || startDate <= justificationDate;
      const matchesEndDate = isNaN(endDate) || justificationDate <= endDate;

      console.log(`Matches: ${matchesStatus}, Start Date Match: ${matchesStartDate}, End Date Match: ${matchesEndDate}`);

      // Return true if all filters match
      return matchesStatus && matchesStartDate && matchesEndDate;
    });

    console.log(`Filtered Justificativas:`, filteredJustificativas);

    // Clear the existing table but keep the template row
    tableBody.innerHTML = ''; // Clear previous rows

    // Re-render the filtered table
    filteredJustificativas.forEach((justificativa, index) => {
      const newRow = createRowFromTemplate(templateRow, justificativa, index);
      tableBody.appendChild(newRow);
    });

    // Show the clear filter button
    clearFilterButton.classList.remove('hidden');
  });

  // Handle the clear filter button click
  clearFilterButton.addEventListener('click', function() {
    // Reset filter inputs
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('status').value = 'Todos'; // Reset to default status

    // Re-render all justifications
    renderAllJustifications();

    // Hide the clear filter button
    clearFilterButton.classList.add('hidden');
  });
});
