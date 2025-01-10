import React from 'react'
import Image1 from "../assets/Images/vecteezy_student-girl-with-tablet-computer_11929024.jpg"
import Form from '../Form'
import Brands from '../Brands'
import Detailpage from '../Detailpage'
import Faq from '../Faq'
import image4 from "../assets/Images/depositphotos_444933900-stock-photo-young-student-studying-over-internet.jpg"
import Choosecard from '../Choosecard'

function Homepage() {
    const submit = () => {
        alert("Rendering")
    }
  return (
    <div>
        <div className="flex justify-between m-[5%] h-fit">
            <div className="items-center my-auto">
                <p className="text-6xl w-4/5">Empowering your digital <a href className="text-yellow-500">Skills</a></p>
                <p className="my-[10px] w-4/5">Our platform makes education flexible and convenient, so you can achive your goals wherever and whenever you choose</p>
                <button className="bg-[#569f76] my-[20px] p-[12px] rounded-xl text-white font-bold" onClick={submit}>
                    Join Course
                </button>
                <div>
                    <div className="flex">
                        <img src={image4} className="rounded-full mx-1" height={20} width={60} alt="image"/>
                        <img src={image4} alt="image" className="rounded-full mx-1" height={20} width={60} />
                        <img src={image4} alt="image" className="rounded-full mx-1" height={20} width={60} />
                        <img src={image4} className="rounded-full mx-1" height={20} width={60} alt="image"/>
                    </div>
                    <div>
                        <p></p>
                        <div class="mx-auto">
                            <div>
	<div class="flex text-start">
		<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
			</path>
		</svg>
		<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
			</path>
		</svg>
		<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
			</path>
		</svg>
		<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
			</path>
		</svg>
		<svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
			</path>
		</svg>
        <p>(4.5)</p>
        </div>
        <p>1000+ Review of our course</p>
    </div>
</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={Image1} className="h-[600px] w-full rounded-2xl" alt=""/>
            </div>
        </div>
        <Brands />
        <div className="bg-white h-4/5">
        <div>
            <p className="text-5xl p-[20px] w-2/5">Start exploring: Find your perfect <a href className="text-green-500">Category</a></p>
        </div>
            <div>
                <p className="text-md p-[20px] w-2/5">Dive into our diverse range of categories and discover the ideal course to match your interest and goals.</p>
            </div>
            <Choosecard />
        </div>
        <Faq />
        <Detailpage />
        <Form />
    </div>
  )
}

export default Homepage