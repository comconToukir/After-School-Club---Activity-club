import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const UserInfo = () => {
  return (
    <div>
      <div className='flex gap-3 items-center shadow-sm p-3 mb-3'>
        <img className="w-16 rounded-full" src="https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-icon-grey-profile-picture-business-vector-id1327592506?k=20&m=1327592506&s=612x612&w=0&h=hgMOPfz7H-CYP_CQ0wbv3IwRkbQna32xWUPoXtMyg5M=" alt="" />
        <div>
          <h2 className='text-xl font-semibold mb-1'>Toukir Ahammed</h2>
          <p className='text-gray-400 text-sm flex items-center'><FontAwesomeIcon className='text-lg text-lime-400 mr-1' icon={faEnvelope} />ahmdtoukir@gmail.com</p>
        </div>
      </div>
      <div className='flex gap-2 text-center'>
        <div className='p-2 shadow-sm flex-1'>
          <h3 className='text-2xl font-medium'>65<span className='text-sm text-lime-400'> kg</span></h3>
          <span className='text-gray-400'>Weight</span>
        </div>
        <div className='p-2 shadow-sm flex-1'>
        <h3 className='text-2xl font-medium'>166<span className='text-sm text-lime-400'> cm</span></h3>
          <span className='text-gray-400'>Height</span>
        </div>
        <div className='p-2 shadow-sm flex-1'>
        <h3 className='text-2xl font-medium'>26<span className='text-sm text-lime-400'> yrs</span></h3>
          <span className='text-gray-400'>Age</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;