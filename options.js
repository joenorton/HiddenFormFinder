// Saves options to chrome.storage
function save_options() {
  var hff_logging = document.getElementById('console-log').value;
  var hff_toolbar = document.getElementById('hff-toolbar').value;
  var hff_toolbar_timer = document.getElementById('toolbar_timer').value;
  chrome.storage.sync.set({
    HHF_logging: hff_logging,
    HHF_toolbar: hff_toolbar,
    HFF_timer: hff_toolbar_timer
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    HHF_logging: 'yes',
    HHF_toolbar: 'yes',
    HFF_timer: 'No Timer'
  }, function(items) {
    document.getElementById('console-log').value = items.HHF_logging;
    document.getElementById('hff-toolbar').value = items.HHF_toolbar;
    document.getElementById('toolbar_timer').value = items.HFF_timer;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);