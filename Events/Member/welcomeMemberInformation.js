module.exports = {
    name: "guildMemberAdd",
    execute(member, client) {
        const memberRole = member.guild.roles.cache.find(r => r.name == "Member")
        member.roles.add(memberRole);
    }
}