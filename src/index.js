const LinkSocialMedia = {
    github: 'oam-victor',
    youtube: '',
    facebook: '',
    instagram: '',
    twitter: ''
  }

  function changeSocialMediaLinks() {
    for (let li of icons.children) {

      li.children[0].href = `/target.html`;

    }
  }

  changeSocialMediaLinks()

const getGitInfo = () =>{
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`;
  fetch(url)
  .then(res => res.json())
  .then(data =>{
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    userImage.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
}

getGitInfo();