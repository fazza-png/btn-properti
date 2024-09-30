class UserFactory {
    async createStandardUser() {
        return {
            email : 'kevinmuhammad476@gmail.com',
            password : 'S@tu234567890'
        }
    }
}

module.exports = UserFactory