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
    if(justificativa.reason){
      newRow.querySelector("[data-reason]").textContent = justificativa.reason;
    }
    if(justificativa.file){
      newRow.querySelector("[data-file-button]").textContent = justificativa.file;
    }
    newRow.querySelector("[data-status]").textContent = justificativa.status;
    newRow.classList.add('justificativa-item');
    newRow.classList.remove('template-row');

    const checkboxLabel = newRow.querySelector('.checkbox-label');
    checkboxLabel.htmlFor = `checkbox${index + 1}`;
    const checkboxInput = newRow.querySelector('.mdl-checkbox__input');
    checkboxInput.id =  `checkbox${index + 1}`;

    // Append the new row to the table body
    tableBody.appendChild(newRow);
  });
}

document.addEventListener("DOMContentLoaded", renderCompleteTableData);
document.addEventListener("DOMContentLoaded", renderFastTableData);

// Add an event listener to the buttons
document.addEventListener('click', (e) => {
  // Check if the clicked element is a button
  if (e.target.classList.contains('button-aproved') || e.target.classList.contains('button-deny') || e.target.classList.contains('button-apuracao') || e.target.classList.contains('button-file')) {
    // Get the parent element (the justificativa item)
    const justificativaItem = e.target.closest('.justificativa-item');

    // Get the status container
    const statusContainer = justificativaItem.querySelector('.status');
    if (statusContainer) {
      // Check if status is pendente
      const statusText = statusContainer.querySelector('.status-text');
      const isEditLocked = justificativaItem.classList.contains('edit-lock')
      if (statusText.textContent != 'Pendente' && !isEditLocked && !unlockEditClicked) {
        justificativaItem.classList.add('edit-lock');
      }
      // Check if edit-unlock is clicked
      var unlockEditClicked = e.target.classList.contains('edit-unlock')
      if (unlockEditClicked) {
        justificativaItem.classList.remove('edit-lock');
      }
      else {
        // Check if the button is the aprovar button
        if (e.target.classList.contains('button-aproved')) {
          // Update the status container with the new status
          statusContainer.innerHTML = '';
          const newStatusP = document.createElement('p');
          const newStatus = document.createElement('span');
          newStatus.textContent = 'Aprovado';
          const xIcon = document.createElement('span');
          xIcon.classList.add('material-symbols-outlined', 'text-sm');
          xIcon.textContent = 'check_circle';
          newStatusP.classList.add('flex', 'items-center', 'justify-center', 'text-green-500', 'font-bold', 'space-x-1', 'status-text')
          newStatusP.appendChild(xIcon);
          newStatusP.appendChild(newStatus);
          statusContainer.appendChild(newStatusP);

          // Select the next item if in fast table
          if (/index/.test(window.location.href)){
            // Remove the selected class from the current item
            justificativaItem.classList.remove('selected');

            const nextItem = justificativaItem.nextElementSibling;
            if (nextItem) {
              nextItem.classList.add('selected');
            }
         }
        }

        // Check if the button is the recusar button
        if (e.target.classList.contains('button-deny')) {
          // Show the recusa form
          justificativaItem.classList.add('recusa-mode');

          //Focus on the input
          justificativaItem.querySelector('input').focus();

          // Add an event listener to the form
          justificativaItem.querySelector('.recusa-form').addEventListener('submit', (e) => {
            e.preventDefault();

            // Update the status container with the new status
            statusContainer.innerHTML = '';
            const newStatusP = document.createElement('p');
            const newStatus = document.createElement('span');
            newStatus.textContent = 'Recusado';
            const xIcon = document.createElement('span');
            xIcon.classList.add('material-symbols-outlined', 'text-sm');
            xIcon.textContent = 'do_not_disturb_on';
            newStatusP.classList.add('flex', 'items-center', 'text-red-500', 'font-bold', 'space-x-1')
            newStatusP.appendChild(xIcon);
            newStatusP.appendChild(newStatus);
            statusContainer.appendChild(newStatusP);

            // Add the reason for rejection below the status
            const reason = document.createElement('p');
            reason.textContent = justificativaItem.querySelector('#recusa-motivo').value;
            statusContainer.appendChild(reason);

            // Hide the recusa form
            justificativaItem.classList.remove('recusa-mode');

            // Remove the selected class from the current item
            justificativaItem.classList.remove('selected');

            // Select the next item if fast table
            if (/index/.test(window.location.href)){
            const nextItem = justificativaItem.nextElementSibling;
              if (nextItem) {
                nextItem.classList.add('selected');
              }
            }
          });
          document.addEventListener('click', (e) => {
            // Check if back is clicked
            if (e.target.classList.contains('back')) {
              justificativaItem.classList.remove('recusa-mode');
            }
          })
        }
      }
    }
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

