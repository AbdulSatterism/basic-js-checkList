// 4 . friends
// bestFriend big name output dite hobe

const friends = ['Abul Azad', 'Kabul', 'Jabul', 'Mohammad Abdul Satter', 'Abdul Satter'];

function bestFriends(name) {
    let bigName = [0];
    for (let i = 0; i < name.length; i++) {
        const friend = name[i];
        if (friend.length > bigName.length) {
            bigName = friend;
        }
    }
    return bigName;
}

const biggestName = bestFriends(friends);
console.log("big name is :", biggestName)
