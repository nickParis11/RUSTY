import React from 'react';
import PrimaryHeader from './PrimaryHeader.jsx';


const BusinessProfile = () => {
  return (
    <div>
      <PrimaryHeader />
      <div>
        <h1>USER PROFILE</h1>
        </div>
    </div>
    )
};

export default BusinessProfile;


/*


class Profile extends React.Component {



	render () {
		//console.log('in PRofile ')
		let dataz=this.props.parent.state.mockedServerRetrievedData; 
		//console.log('in PRofile dataz = ', dataz)

		return ( 
		<div>

			<h2> in Profile component // THIS IS SERVER RETRIEVED DATA </h2>

			Email : {dataz.email || ''} <br/>
			Name : {dataz.name || ''} <br/>
			Zip : {dataz.zip || ''} <br/>
			password : {dataz.password || ''} <br/>
			Pet : {dataz.pet || ''}
		</div>
		)
	}
}


*/