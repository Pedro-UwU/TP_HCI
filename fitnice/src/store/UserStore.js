export const UserStore = {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    gender: null,
    birthdate: null,
    email: null,
    phone: null,
    avatarUrl: null,
    metadata: null,
    date: null,
    lastActivity: null,
    verified: null,

    token: null
}



export function loadUserData(data) {
    UserStore.id = data.id;
    UserStore.username = data.username;
    UserStore.firstName = data.firstName;
    UserStore.lastName = data.lastName;
    UserStore.gender = data.gender;
    UserStore.birthdate = data.birthdate;
    UserStore.email = data.email;
    UserStore.phone = data.phone;
    UserStore.avatarUrl = data.avatarUrl;
    UserStore.metadata = data.metadata;
    UserStore.date = data.date;
    UserStore.lastActivity = data.lastActivity;
    UserStore.verified = data.verified;
}

