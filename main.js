const links = {
  github: 'Brennez',
  facebook: 'kratos.brenne',
  youtube: 'UCAhNCEQJL2eCou684VoWVXg',
  instagram: 'brenneeeeesz'
}

function changeUserName(text) {
  // document.getElementById('nameUser').textContent = text
  nameUser.textContent = text
}

function changeSocialMediaLinks() {
  for (li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}
changeSocialMediaLinks()
// changeUserName('Zeca Pagodinho')

function getProfileGit() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById('nameUser').textContent = data.name
      document.getElementById('profile').src = data.avatar_url
      document.getElementById('userBio').textContent = data.bio
      document.getElementById('linkGit').href = data.html_url
      document.getElementById('userLogin').textContent = data.login
    })
}

getProfileGit()
