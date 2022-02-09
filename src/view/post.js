/* eslint-disable no-undef */
export default () => {
  const viewPost = (urlPhoto, userName, datePost, contentPost) => `
    <section class="postTimeline">
        <div>
            <img class="avatarProfile" src="${urlPhoto}">
            <div>
                <h3 class="user-name"> ${userName} </h3>
                <p class="date-post"> ${datePost} </p>
            </div>
        </div>

        <div>
            <textarea class="content-post"> ${contentPost} </textarea>
            <div class="iconPost">
                <!-- <i class="fa-solid fa-circle-heart"></i> -->
                <i class="fa-brands fa-gratipay"></i>
                <i class="fa-solid fa-comment-dots"></i>
                <i class="fa-solid fa-paper-plane"></i>
            </div>
        </div>
    </section>`;

  const viewPostDiv = document.createElement('div');
  viewPostDiv.innerHTML = viewPost;
  return viewPostDiv;
};
