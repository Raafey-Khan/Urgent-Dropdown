function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function toggleSelectAll(element, label) {
    const section = element.closest('section');
    const checkboxes = section.querySelectorAll('.language-option');
    checkboxes.forEach(cb => cb.checked = element.checked);
    updateLabel();
}

function updateLabel() {
    const select = document.querySelector('.dropdown-select');
    const selectedLanguages = [];
    const selectedLabels = new Set();

    // Check karenge all programming language options
    const programmingOptions = document.querySelectorAll('.language-option.programming');
    const allProgrammingChecked = Array.from(programmingOptions).every(cb => cb.checked);
    if (allProgrammingChecked || Array.from(programmingOptions).some(cb => cb.checked)) {
        document.getElementById('select-all-programming').checked = true;
        selectedLabels.add('Programming Languages');
    } else {
        document.getElementById('select-all-programming').checked = false;
    }

    // Checking all scripting language options
    const scriptingOptions = document.querySelectorAll('.language-option.scripting');
    const allScriptingChecked = Array.from(scriptingOptions).every(cb => cb.checked);
    if (allScriptingChecked || Array.from(scriptingOptions).some(cb => cb.checked)) {
        document.getElementById('select-all-scripting').checked = true;
        selectedLabels.add('Server Side Scripting Languages');
    } else {
        document.getElementById('select-all-scripting').checked = false;
    }

    // Collection selected individual languages
    document.querySelectorAll('.language-option:checked').forEach(cb => selectedLanguages.push(cb.value));

    // Update the dropdown label agar labeled raha toh
    select.innerHTML = '';
    if (selectedLanguages.length > 0) {
        const option = document.createElement('option');
        option.text = Array.from(selectedLabels).join(', ') + ', ' + selectedLanguages.join(', ');
        select.add(option);
    } else {
        const option = document.createElement('option');
        option.text = 'Select Languages';
        select.add(option);
    }
}

// Hide dropdown if clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});