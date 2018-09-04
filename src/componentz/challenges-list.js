import React from 'react';
// import _ from 'lodash';
import './challenges-list.css';
import { getPublicProfileGivenId } from '../actions/users';
import { connect } from 'react-redux';



export class ChallengeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profileArray: [],
      sortedNames:[]
    }
  }


  //Check if the next props exist whenever the component updates - depreciated 
  
  componentWillReceiveProps(nextProps){

    if(nextProps.challenges) {

      nextProps.challenges.challenges.map((challenge, index) => {
 
        if(challenge.status){

          if(challenge.status === 'requested') {
            this.onEvent(challenge.sender);
          } else {
            this.onEvent(challenge.receiver);
          }
  
          
          
        }
      });

      // console.log(this.profileFind(nextProps.challenges.challenges, this.state.profileArray));
    }
  }


  // profileFind(ownApiCollection, profileCollection) {
    // console.log(profileCollection)
    // let returnCollection = _.uniqBy(ownApiCollection, 'receiver');
    // console.log(returnCollection);
    // console.log(ownApiCollection);
    // returnCollection = ownApiCollection.map((ownData) => {
    //   console.log(ownData);
    //   //return _.assign(ownData, _.find(profileCollection, {id: ownData.id}));
    // });
    //console.log(returnCollection);
    //return returnCollection;
  // }


  getEachName(nameId) {
    for(let i=0; i < this.state.profileArray.length; i++) {
      if(nameId === this.state.profileArray[i].id) {
        return this.state.profileArray[i].username;
      }
    }
  }

  // getEachName(nameId) {
  //   for(let i=0; i < this.state.profileArray.length; i++) {
  //     if(nameId === this.state.profileArray[i].id) {
  //       console.log('match')
  //       let userName = this.state.profileArray[i].username;
  //       this.setState((currentState) => ({
  //         // console.log(currentState)
  //         // console.log(userName)
  //         sortedNames: [...currentState.sortedNames, userName]
  //       }))
  //     }
  //   }
  // }


//2018-09-04T08:19:28.710Z

  timeConverter(timestamp){
    let time = timestamp.split('T')
    return time;
  }

  

  onEvent(userId) {

    this.props.dispatch(getPublicProfileGivenId(userId))
      .then(data => {

        this.setState(prevState => ({
          profileArray: [...prevState.profileArray, data]
        }))


      })
      .catch(error => console.log(error));
  }

  render(){//cant update state inside render function because everytime state updates it will run render which will lead to an infinite loop
    if (!this.props.challenges) {
      return null;
    }

    const rows = this.props.challenges.challenges.map((challenge, index) => {
      // let count = 0;
      // let name = "";
      // console.log(challenge)
      if(challenge.status){
        let challengeTime = this.timeConverter(challenge.sent);
        // if(challenge.status === 'requested') {
        //   name = this.getEachName(challenge.sender)
        // } else {
        //   name = this.getEachName(challenge.receiver)
        // }
        
        // this.getEachName(challenge.receiver);
        // console.log(this.state.sortedNames)
      //  let name = this.getEachName(challenge.receiver)
        // for(let i=0; i < this.state.profileArray.length; i++) {
        //   if(challenge.receiver === this.state.profileArray[i].id) {
        //     name = this.state.profileArray[i].username;
        //   }
        // }
        // let name = this. .sortedNames[count];
        // count++;

        return(
          <tr key={index}>
            {/* <td>{name}</td> */}
            <td>{challenge.receiver}</td>
            <td>100 commits</td>
            <td>{challenge.status}</td>
            {/* <td>{challenge.sent}</td> */}
            <td>{challengeTime[0]}</td>
            <td>
              {challenge.status === "requested" ? <button value={challenge} onClick={() => this.props.onAcceptFriendChallenge(challenge)}>Accept</button> : ''}
              {challenge.status === "pending" ? <button value={challenge} onClick={() => this.props.onCancelFriendChallenge(challenge)}>Cancel</button> : ''}
              {challenge.status === "accepted" ? <button value={challenge} onClick={() => this.props.onCancelFriendChallenge(challenge)}>Completed</button> : ''}
            </td>
          </tr>
        )
      }
    });

    return (
      <section className="challenges">
        <table>
          <thead>
            <tr>
              <th>Reciever</th>
              <th>Challenge</th>
              <th>Status</th>
              <th>Sent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </section>
    );
  }
}


const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ChallengeList);