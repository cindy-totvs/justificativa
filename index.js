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
    nome: "João Pereira",
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
    adjustmentType: "Remoção de batida",
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
    file: "draft",
    reason: "Atestado Médico",
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
    adjustmentType: "Ajuste por reunião",
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
    adjustmentType: "Correção de ponto",
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
    adjustmentType: "Ajuste manual",
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
    adjustmentType: "Ajuste manual",
    day: "Sexta, 01/09/2024",
    editedHour: "09:00",
    totalBefore: "-07:15",
    totalAfter: "07:30",
    status: "Pendente"
  }
];

function renderFastTableData() {
  const tableBody = document.getElementById("fast-table-body");
  const templateRow = document.getElementById("fast-template-row");

  justificativas.forEach((justificativa, index) => {
    // Clone the template row
    const newRow = templateRow.cloneNode(true);
    newRow.style.display = ""; // Make it visible
    newRow.removeAttribute("id"); // Remove the id to avoid duplicates

    // Assign a unique id to each row
    newRow.id = `item${index + 1}`;

    // Populate the row using data-* attributes
    newRow.querySelector("[data-name]").textContent = justificativa.nome;
    newRow.querySelector("[data-employee-id]").textContent = justificativa.matricula;
    newRow.querySelector("[data-local]").textContent = justificativa.local;
    newRow.querySelector("[data-message]").textContent = justificativa.mensagem;
    newRow.querySelector("[data-timestamp]").textContent = justificativa.timestamp;
    newRow.querySelector("[data-adjustment-type]").textContent = justificativa.adjustmentType;
    newRow.querySelector("[data-day]").textContent = justificativa.day;
    newRow.querySelector("[data-edited-hour]").textContent = justificativa.editedHour;
    newRow.querySelector("[data-total-before]").textContent = justificativa.totalBefore;
    newRow.querySelector("[data-total-after]").textContent = justificativa.totalAfter;
    newRow.querySelector("[data-status]").textContent = justificativa.status;
    if(justificativa.file){
      newRow.querySelector("[data-file-button]").classList.remove('hidden')
    }
    newRow.classList.add('justificativa-item');

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });

  // Select the first item by default if fast table
  if (/index/.test(window.location.href)){
    const justificativaItems = document.querySelectorAll('.justificativa-item');
    if (justificativaItems.length > 0) {
      justificativaItems[0].classList.add('selected');
    }
    // Add click event listeners to each justificativa item
    justificativaItems.forEach((item) => {
      item.addEventListener('click', () => {
        // Remove the selected class from the current selected item
        const currentItem = document.querySelector('.justificativa-item.selected');
        if (currentItem) {
          currentItem.classList.remove('selected');
        }

        // Add the selected class to the clicked item
        item.classList.add('selected');
      });
    });
  }
}

function renderCompleteTableData() {
  const tableBody = document.getElementById("complete-table-body");
  const templateRow = document.getElementById("complete-template-row");

  justificativas.forEach((justificativa, index) => {
    // Clone the template row
    const newRow = templateRow.cloneNode(true);
    newRow.style.display = ""; // Make it visible
    newRow.removeAttribute("id"); // Remove the id to avoid duplicates
    newRow.classList.remove('template-row');

    // Assign a unique id to each row
    newRow.id = `item${index + 1}`;  // <-- Ensure this ID is correctly set
    console.log(`Assigned ID to row: item${index + 1}`); // Log ID assignment

    // Populate the row using data-* attributes
    newRow.querySelector("[data-name]").textContent = justificativa.nome;
    newRow.querySelector("[data-employee-id]").textContent = justificativa.matricula;
    newRow.querySelector("[data-local]").textContent = justificativa.local;
    newRow.querySelector("[data-message]").textContent = justificativa.mensagem;
    newRow.querySelector("[data-timestamp]").textContent = justificativa.timestamp;
    newRow.querySelector("[data-adjustment-type]").textContent = justificativa.adjustmentType;
    newRow.querySelector("[data-day]").textContent = justificativa.day;
    newRow.querySelector("[data-edited-hour]").textContent = justificativa.editedHour;
    newRow.querySelector("[data-tr-index]").id = 'see-more-'+ newRow.id;
    if(justificativa.reason) {
      newRow.querySelector("[data-reason]").textContent = justificativa.reason;
    }
    if(justificativa.file) {
      newRow.querySelector("[data-file-button]").textContent = justificativa.file;
    }
    newRow.querySelector("[data-status]").textContent = justificativa.status;
    newRow.classList.add('justificativa-item'); // Add class to identify each row

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });
}



document.addEventListener("DOMContentLoaded", renderCompleteTableData);
document.addEventListener("DOMContentLoaded", renderFastTableData);

// Handle button clicks for both fast and complete tables
document.addEventListener('click', (e) => {
  const clickedButton = e.target.closest('.button-aproved, .button-deny, .button-apuracao, .button-file, .button-voltar');
  if (clickedButton) {
    const justificativaItem = clickedButton.closest('.justificativa-item');
    const statusContainer = justificativaItem.querySelector('.status');
    if (!statusContainer) return;

    const isFastTable = document.getElementById("fast-table"); // Check if we're in fast mode
    const nextItem = justificativaItem.nextElementSibling;

    // Handle approval
    if (clickedButton.classList.contains('button-aproved')) {
      statusContainer.innerHTML = `
        <p class="flex items-center justify-center text-green-500 font-bold space-x-1">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          <span class="status-text">Aprovado</span>
        </p>`;
      justificativaItem.classList.remove('selected');

      // Auto-select the next item in fast mode
      if (isFastTable && nextItem) {
        nextItem.classList.add('selected');
      }
    }

    // Handle rejection
    if (clickedButton.classList.contains('button-deny')) {
      justificativaItem.classList.add('recusa-mode');
      const reasonInput = justificativaItem.querySelector('#recusa-motivo');
      reasonInput.focus();  // Focus the input field
      justificativaItem.querySelector('.recusa-form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        const reason = justificativaItem.querySelector('#recusa-motivo').value;

        statusContainer.innerHTML = `
          <p class="flex items-center text-red-500 font-bold space-x-1">
            <span class="material-symbols-outlined text-sm">do_not_disturb_on</span>
            <span class="status-text">Recusado</span>
          </p>
          <p>${reason}</p>`;
        justificativaItem.classList.remove('recusa-mode');
        justificativaItem.classList.remove('selected');

        // Auto-select the next item in fast mode
        if (isFastTable && nextItem) {
          nextItem.classList.add('selected');
        }
      });
    }
    
    // Handle voltar
    if (clickedButton.classList.contains('button-voltar')) {
      justificativaItem.classList.remove('recusa-mode');
    }

    // Handle file viewing (e.g., medical certificate)
    if (clickedButton.classList.contains('button-file')) {
      const fileModal = document.getElementById('fileModal');
      fileModal.classList.remove('hidden');
      // Focus the input field for the rejection reason inside the modal
      const closeButton = fileModal.querySelector('#cancelModal');
      closeButton.focus();  // Focus the input field
    }
  }
});

// Close file modal
document.addEventListener('click', (e) => {
  const fileModal = document.getElementById('fileModal');
  if (e.target.id === 'cancelModal' || e.target.classList.contains('modal-background')) {
    fileModal.classList.add('hidden');
  }
});


// Add an event listener to the document for keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Get the current selected item
  const selectedItem = document.querySelector('.justificativa-item.selected');

  // Check if the selected item exists
  if (selectedItem) {
    // Check if the Enter key is pressed
    if (e.key === 'Enter') {
      // Aprovar the current item
      const aprovarButton = selectedItem.querySelector('.button-aproved');
      if (aprovarButton) {
        aprovarButton.click();
      }
    }
    
    // Check if the ESC key is pressed
    if (e.key === 'Escape') {
      // Aprovar the current item
      const aprovarButton = selectedItem.querySelector('.back');
      if (aprovarButton) {
        aprovarButton.click();
      }
    }

    // Check if the Delete key is pressed
    if (e.key === 'Delete') {
      // Recusar the current item
      const recusarButton = selectedItem.querySelector('.button-deny');
      if (recusarButton) {
        recusarButton.click();
      }
    }

    // Check if the Space key is pressed
    if (e.key === 'Space') {
      // Apuração the current item
      const apuracaoButton = selectedItem.querySelector('.button-apuracao');
      if (apuracaoButton) {
        apuracaoButton.click();
      }
    }
    
    // Check if the Down key is pressed
    if (e.key === 'ArrowUp') {
      // Select the next item
      const previousItem = selectedItem.previousElementSibling;
      if (previousItem) {
        selectedItem.classList.remove('selected');
        previousItem.classList.add('selected');
      }
    }

    // Check if the Down key is pressed
    if (e.key === 'ArrowDown') {
      // Select the next item
      const nextItem = selectedItem.nextElementSibling;
      if (nextItem) {
        selectedItem.classList.remove('selected');
        nextItem.classList.add('selected');
      }
    }

    // Check if the F key is pressed
      if (e.ctrlKey) {
        if (e.key === 'Enter') {
          console.log("f pressed")
          const seeFileButton = selectedItem.querySelector('.button-file');
          if (seeFileButton) {
            seeFileButton.click();
          }
        }
      }
    }
});


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

document.addEventListener('DOMContentLoaded', function () {
  const selectAllCheckbox = document.getElementById('select-all-checkbox');
  const itemCheckboxes = document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox)');
  const headUnchecked = document.getElementById('head-unchecked');
  const headChecked = document.getElementById('head-checked');
  const approveAllButton = document.getElementById('button-approved-all');
  const selectedItemsSpan = document.querySelector('[data-selecionados]');
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmApproveButton = document.getElementById('confirmApprove');
  const cancelModalButton = document.getElementById('cancelModal');

  function updateHeaderStatus() {
      const checkedCount = document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox):checked').length;
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

  function updateSelectAllCheckbox() {
      const totalItems = document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox)').length;
      const checkedItems = document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox):checked').length;

      // If all checkboxes are checked, mark "Select All" as checked, else uncheck it
      console.log('totalItems', totalItems)
      console.log('checkedItems', checkedItems)
      console.log('totalItems == checkedItems', totalItems == checkedItems)
      console.log('selectAllCheckbox', selectAllCheckbox.checked)
      selectAllCheckbox.checked = (totalItems == checkedItems);
      //selectAllCheckbox.checked = true;
  }

  selectAllCheckbox.addEventListener('change', function () {
      const isChecked = selectAllCheckbox.checked;
      document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox)').forEach(checkbox => {
          checkbox.checked = isChecked;
          checkbox.dispatchEvent(new Event('change'));  // Trigger the change event manually
      });
  });

  approveAllButton.addEventListener('click', function () {
      // Show the modal when the "Approve All" button is clicked
      confirmationModal.classList.remove('hidden');
  });

  document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox)').forEach(checkbox => {
      checkbox.addEventListener('change', function () {
          updateSelectAllCheckbox();  // Update "Select All" checkbox state
          updateHeaderStatus();  // Update header status and selected items span
      });
  });

  // Confirm the approval action when "Confirm" is clicked in the modal
  confirmApproveButton.addEventListener('click', function () {
      // Hide the modal
      confirmationModal.classList.add('hidden');

      // Approve the selected items
      document.querySelectorAll('.item-checkbox:not(.template-row .item-checkbox):checked').forEach(checkbox => {
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
              } else {
                  console.error('No status container found for item:', justificativaItem);
              }
          }
      });
  });

  // Close the modal without approving when "Cancel" is clicked
  cancelModalButton.addEventListener('click', function () {
      confirmationModal.classList.add('hidden');
  });

  // Initial update of header, "Select All" checkbox, and selected items span
  updateHeaderStatus();
  updateSelectAllCheckbox();
});

document.addEventListener('click', (e) => {
  // Check if the clicked element has the 'button-file' class
  if (e.target.classList.contains('button-file')) {
    const fileModal = document.getElementById('fileModal');
    if (fileModal) {
      fileModal.classList.remove('hidden');  // Remove 'hidden' class to show the modal
    } else {
      console.error("Modal not found!");
    }
  }
});

document.addEventListener('click', (e) => {
  const fileModal = document.getElementById('fileModal');
  
  // Check if the clicked element is the cancel button or the modal background
  if (fileModal && (e.target.id === 'cancelModal' || e.target.classList.contains('modal-background'))) {
    fileModal.classList.add('hidden');  // Add 'hidden' class to close the modal
  }
});

// Handle opening the "Detalhes da Justificativa" modal
document.addEventListener('click', function (e) {
  const seeMoreButtons = e.target.closest('.button-see-more');
  if (seeMoreButtons) {
    let btnID = seeMoreButtons.id; // Get the index of the justification
    let index = btnID.replace(/^see-more-item/, '');  
    const justificativa = justificativas[index]; // Fetch the specific justificativa data

    if (!justificativa) return;

    // Get the modal and populate its fields
    const justificativaModal = document.getElementById('justificativaModal');
    justificativaModal.querySelector('[data-modal-nome]').textContent = justificativa.nome;
    justificativaModal.querySelector('[data-modal-matricula]').textContent = justificativa.matricula;
    justificativaModal.querySelector('[data-modal-local]').textContent = justificativa.local;
    justificativaModal.querySelector('[data-modal-mensagem]').textContent = justificativa.mensagem;
    justificativaModal.querySelector('[data-modal-timestamp]').textContent = justificativa.timestamp;
    justificativaModal.querySelector('[data-modal-adjustmentType]').textContent = justificativa.adjustmentType;
    justificativaModal.querySelector('[data-modal-day]').textContent = justificativa.day;
    justificativaModal.querySelector('[data-modal-editedHour]').textContent = justificativa.editedHour;
    justificativaModal.querySelector('[data-modal-status]').textContent = justificativa.status;

    // Remove 'selected' class from any other item
    const currentSelected = document.querySelector('.justificativa-item.selected');
    if (currentSelected) {
      currentSelected.classList.remove('selected');
    }

    // Add 'selected' class to the clicked item
    const justificativaItem = document.getElementById('item' + index);
    console.log(justificativaItem); // Check if this row is found
    if (justificativaItem) {
      justificativaItem.classList.add('selected');
      console.log(`Row with ID item${index} found and selected.`);
    } else {
      console.error(`No table row found with ID item${index}`);
    }

    // Show the modal
    justificativaModal.classList.remove('hidden');
  }
  if (e.target.id === 'closeModalButton'  || e.target.id === `justificativaModal`) {
    justificativaModal.classList.add('hidden'); // Close the modal
  }
});




// Handle approval and denial from the "Detalhes da Justificativa" modal
document.addEventListener('click', function (e) {
  const cancelModalButton = document.getElementById('cancelModal');
  const justificativaModal = document.getElementById('justificativaModal');
  const selectedItem = document.querySelector('.justificativa-item.selected'); // Get the currently selected justification

  if (selectedItem) {
    if (e.target.classList.contains('button-aproved')) {
      // Approve the selected justification
      justificativaModal.querySelector('[data-modal-status]').textContent = 'Aprovado';
      const statusContainer = selectedItem.querySelector('.status');
      statusContainer.innerHTML = `
        <p class="flex items-center justify-center text-green-500 font-bold space-x-1">
          <span class="material-symbols-outlined text-sm">check_circle</span>
          <span class="status-text">Aprovado</span>
        </p>`;
      justificativaModal.classList.add('hidden'); // Close the modal
    }

    if (e.target.classList.contains('button-deny')) {
      // Show the refusal form
      justificativaModal.querySelector('.recusa-form').classList.remove('hidden');

      
      // Focus the input field for the rejection reason inside the modal
      const recusaInput = justificativaModal.querySelector('#recusa-motivo');
      recusaInput.focus();  // Focus the input field

    }

    justificativaModal.querySelector('.recusa-form').addEventListener('submit', function(ev) {
      ev.preventDefault();
      const reason = justificativaModal.querySelector('#recusa-motivo').value;

      // Update modal status to "Recusado"
      justificativaModal.querySelector('[data-modal-status]').textContent = 'Recusado';

      // Update the table row status to "Recusado" with the provided reason
      const statusContainer = selectedItem.querySelector('.status');
      statusContainer.innerHTML = `
        <p class="flex items-center text-red-500 font-bold space-x-1">
          <span class="material-symbols-outlined text-sm">do_not_disturb_on</span>
          <span class="status-text">Recusado</span>
        </p>
        <p>${reason}</p>`;

      justificativaModal.classList.add('hidden'); // Close the modal after submission
    });
  }
});
