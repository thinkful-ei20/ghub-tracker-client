import React from 'react';
import _ from 'lodash';
import './challenges-list.css';
import { getPublicProfileGivenId } from '../actions/users';
import { connect } from 'react-redux';



export class ChallengeList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profileArray: []
    }
  }


  //Check if the next props exist whenever the component updates - depreciated 
  componentWillReceiveProps(nextProps){

    if(nextProps.challenges) {

      nextProps.challenges.challenges.map((challenge, index) => {
 
        if(challenge.status){
  
          let id = challenge.receiver;
  
          this.onEvent(challenge.receiver);
          
        }
      });

      // console.log(this.profileFind(nextProps.challenges.challenges, this.state.profileArray));
    }
  }


//   componentDidUpdate(prevProps, prevState) {
//     // console.log(prevProps)
//     if(prevProps.challenges) {
//       console.log(prevProps)
//     if (prevState.username !== this.state.username) {
//         prevProps.challenges.challenges.map((challenge, index) => {
//         if(challenge.status){
//           this.onEvent(challenge.receiver);
//         }
//       });
//     }
//   }
//   }
  
//   static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps.username!==prevState.username){
//       let challenges=prevState.challenges;
      
//       challenges.off("value"); //Turn off the connection to previous path.
      
// //       We can't do this here as we can't access `this` inside this method.
// //       firebaseRef=firebase.database().ref(nextProps.path);
// //       this.setState({firebaseRef, path :nextProps.path });
// //       this.getData(firebaseRef);
      
//       return {username : nextProps.username};
//     }
//     else return null;
//   }


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

      let name = "";

      if(challenge.status){
        for(let i=0; i < this.state.profileArray.length; i++) {
          if(challenge.receiver === this.state.profileArray[i].id) {
            name = this.state.profileArray[i].username;
          }
        }

        return(
          <tr key={index}>
            <td>{name}</td>
            <td>100 commits</td>
            <td>{challenge.status}</td>
            <td>{challenge.sent}</td>
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