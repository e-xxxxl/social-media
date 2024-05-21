const menuItems = document.querySelectorAll('.menu-item');
//Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.profile-m');
//SEARCH MESSAGES


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            //remove notification count once clicked
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
        })
    })
//----------------------------------Message box shadow
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 3000);
})

//search bar chat