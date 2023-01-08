import React from 'react'
import styles from './InForAbout.module.css'
const InForAbout = () => {
  return (
    <div>
        <div className={`${styles.stande} columns-2`}>
        <img
          class="w-full aspect-video  "
          src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/img4-1024x512.jpg"
        />
        <img
          class="w-full aspect-square "
          src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/img5-1024x512.jpg"
        />
      </div>
      <div className={`${styles.infoAbout} mx-auto grid max-w-2xl  items-center gap-y-8 gap-x-8 px-4 sm:px-6 sm:mt-10 lg:max-w-full  lg:px-8`}>
        <h3 class='pt-10 font-bold text-2xl'>Thông tin hữu ích</h3>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8  lg:max-w-full lg:grid-cols-3">
          <div className="">
            <img
              src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/14.jpg"
              alt=""
            />
            <h5 class='py-2 font-bold'>Bàn ghế Châu Á</h5>
            <p class='text-sm'>
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cosy place to lay their head for a night
              or two.
            </p>
          </div>
          <div className="">
            <img
              src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/14.jpg"
              alt=""
            />
            <h5 class='py-2 font-bold'>Bàn ghế Châu Á</h5>
            <p class='text-sm'>
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cosy place to lay their head for a night
              or two.
            </p>
          </div>
          <div className="">
            <img
              src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/14.jpg"
              alt=""
            />
            <h5 class='py-2 font-bold'>Bàn ghế Châu Á</h5>
            <p class='text-sm'>
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cosy place to lay their head for a night
              or two.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InForAbout