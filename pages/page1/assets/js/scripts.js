let originalIntroText = document.getElementById('intro-text').textContent;
let originalTitle = document.getElementById('title').textContent;
let originalIntroSubtitle = document.getElementById('intro-subtitle').textContent;
let originalBioText = document.getElementById('bio-text').textContent;
let originalProfileImage = document.getElementById('profile-image').src;

function changeContent(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            document.getElementById('intro-text').textContent = 'Section 1';
            document.getElementById('title').textContent = 'Picture Portfolio';
            document.getElementById('intro-subtitle').textContent = 'Photography Gallery';
            document.getElementById('bio-text').textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
            document.getElementById('profile-image').src = './assets/img/button1_image.jpg';
            break;
        case 2:
            document.getElementById('intro-text').textContent = 'Section 2';
            document.getElementById('title').textContent = 'WD Showcase';
            document.getElementById('intro-subtitle').textContent = 'Showcase of Web Design Projects';
            document.getElementById('bio-text').textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
            document.getElementById('profile-image').src = './assets/img/button2_image.jpg';
            break;
        case 3:
            document.getElementById('intro-text').textContent = 'Section 3';
            document.getElementById('title').textContent = 'Resume';
            document.getElementById('intro-subtitle').textContent = 'Here is my Resume';
            document.getElementById('bio-text').textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
            document.getElementById('profile-image').src = './assets/img/button3_image.jpg';
            break;
        case 4:
            document.getElementById('intro-text').textContent = 'Section 4';
            document.getElementById('title').textContent = 'Contacts';
            document.getElementById('intro-subtitle').textContent = 'For more Inquiries, Contact Me.';
            document.getElementById('bio-text').textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
            document.getElementById('profile-image').src = './assets/img/button4_image.jpg';
            break;
        default:
            break;
    }
}

function resetContent() {
    document.getElementById('intro-text').textContent = originalIntroText;
    document.getElementById('title').textContent = originalTitle;
    document.getElementById('intro-subtitle').textContent = originalIntroSubtitle;
    document.getElementById('bio-text').textContent = originalBioText;
    document.getElementById('profile-image').src = originalProfileImage;
}
