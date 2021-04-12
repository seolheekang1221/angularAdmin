import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor() {}

  members = [];
  member = {
    name: '',
    age: ''
  };

  membersCreate() {
    this.members.push({
      name: this.member.name,
      age: this.member.age
    });
    console.log('Done membersCreate', this.members);
  }

  membersRead() {
    this.members = [{
      name: '홍길동',
      age: 20
    }, {
      name: '춘향이',
      age: 16
    }];
    console.log('Done membersRead', this.members);
  }

  membersUpdate(index, member) {
    this.members[index] = member;
    console.log('Done membersUpdate', this.members);
  }

  membersDelete(index) {
    this.members.splice(index, 1);
    console.log('Done membersDelete', this.members);
  }
}