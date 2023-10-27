import './FrontPage.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function FrontPage() {

	useEffect(() => {
		get_FP_Catagory();
	}, [])

	const [catagoryList, setCatagoryList] = useState();

	const get_FP_Catagory = async () => {
		const result = await axios.get("http://localhost:5000/get_fp_catagory");
		setCatagoryList(result.data);
	}

	return (
		<div className='frontPage'>
			<div className='boxArea'>
				{
					catagoryList ?
						catagoryList.map((e) => {
							return (
								<div className='card'>
									<div className='imgArea flex'>
										<img src={e.catagoryImage} />
									</div>
									<div className='textArea'>
										<h1>{e.catagory}</h1>
										<div className='btnArea flex2'>
											<Link className="btnAreaBtn btn" to={`/secondPage/${e.catagoryToken}`}>Click to go</Link>
										</div>
									</div>
								</div>
							);
						})
						:
						<></>
				}
			</div>
		</div>
	)
}
