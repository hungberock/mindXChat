components.chat = `
<section class="chat-container">
  <div class="aside-left">
    <div id="list-conversations" class="list-conversations">
    </div>
    <form id="form-add-conversation" class="form-add-conversation">
      <div class="input-wrapper">
        <input id="title-input" type="text" name="title" placeholder="Title">
        <div id="title-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input id="friend-email-input" type="email" name="friendEmail" placeholder="Enter your friend email..">
        <div id="friend-email-error" class="message-error"></div>
      </div>
      <button id="form-add-conversation-submit-btn" type="submit" class="btn-icon">
        <i class="fas fa-plus"></i>
      </button>
    </form>
  </div>
  <div class="current-conversation">
    <div id="list-messages" class="list-messages">
    </div>
    <form id="form-chat" class="form-chat">
      <div class="input-wrapper">
        <input id="message-input" type="text" name="message" placeholder="Enter your message">
      </div>
      <button id="form-chat-btn" type="submit">Send</button>
    </form>
  </div>
  <div class="aside-right">
    <div class="details-current-conversation">
      <div id="list-users" class="list-users">
      </div>
      <div id="created-at" class="created-at"></div>
    </div>
    <button id="leave-conversation-btn" class="btn-icon">
      <i class="fas fa-minus"></i>
    </button>
  </div>
</section>
`