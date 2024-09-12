function skillsMembers() {
    return {
      restrict: 'E',
      templateUrl: 'modules/skills/views/member.html',
      controllers: 'SkillsMembersController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        members: '='
    }
  };
}