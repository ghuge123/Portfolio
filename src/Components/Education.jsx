import SchoolIcon from '@mui/icons-material/School';
export default function Education(){
    return(
        <>

            <div className='flex justify-center items-center '>
                <SchoolIcon sx={{ fontSize: 45 }} ></SchoolIcon>
                <p className='ml-2 text-3xl font-bold '>My <span className='text-orange-700'>Education</span></p>
            </div>
            <p className='text-center mt-2'>Education is not the learning of facts, but the training of the mind to think.</p>
            <div className='mt-4'>
                <div className='flex border mx-36 bg-gray-100 rounded-md'>
                    <img src="https://media.licdn.com/dms/image/C561BAQHpzEpbmkNCjg/company-background_10000/0/1588013422816/d_y_patil_college_of_engineering_akurdi_pune_cover?e=2147483647&v=beta&t=BRxGqc21BGq0BXTB3vUGXy18NhHHixPrgEHayqhKqMc" className='w-80 h-40 rounded-l-md'></img>
                    <div className='ml-4 mt-4'>
                        <p className='text-2xl font-bold text-indigo-800 mt-2'>Bachelor Of Engineering In Information Technology</p>
                        <p className='mt-2'>DY Patil College Of Engineering, Akurdi | SPPU</p>
                        <p className='text-xl text-green-700 font-semibold mt-2'>2022-2026 | Persuing</p>
                    </div>
                    
                </div>
                <div className='flex border mx-36 bg-gray-100 rounded-md mt-4'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjste-wy9adoxKfzFqlV39y-VLlU_OvL6eGKiK3B2EhX-AuzkdDZL41zxhggc8jpuHkd8&usqp=CAU" className='w-80 h-40 rounded-l-md'></img>
                    <div className='ml-4 mt-4'>
                        <p className='text-2xl font-bold text-indigo-800 mt-2'>HSC Science</p>
                        <p className='mt-2'>CNES, Manmad | HSC</p>
                        <p className='text-xl text-green-700 font-semibold mt-2'>2020-2022 | Completed</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}