import React from 'react'
import "./catalog.css"

const meditations = [
    {
        link: "https://youtu.be/sY7Pz1ux6Ps",
        name: 'heart'
    },
    {
        link: "https://youtu.be/uwE2ojkUAgY",
        name: 'metta'
    },
    {
        link: "https://youtu.be/C9PHYEo2zOY",
        name: 'zen'
    },
    {
        link: "https://youtu.be/bHjjvfy3CYY",
        name: 'values'
    },
    {
        link: "https://youtu.be/ImPwA-txdaw",
        name: 'behaviors'
    },
    {
        link: "https://youtu.be/wquRG4PBOmc",
        name: 'emotions'
    },
    {
        link: "https://youtu.be/QwAuxly8gMg",
        name: "beliefs"
    },
    {
        link: "https://www.youtube.com/playlist?list=PL94YXcilY2mVm4iiGNToMFbBM5f5H0OWm",
        name: 'reconditioning'
    },
    {
        link: "https://www.youtube.com/watch?v=oNw55Qxpf_w&t=2s",
        name: 'short-abundance'
    }]

export default function Catalog() {

    const renderMeditations = () => {
        return meditations.map((meditation, index) => (
            <a href={meditation.link} target="_blank" key={index} className={`meditation-anchor ${meditation.name}`} rel="noopener noreferrer" ><div /></a> // added a div to remove console warning
        ))
    }


    return (
        <div className='meditations contentContainer'>
            <h1>Meditation Catalog</h1>
            <h5>I am a meditation teacher certified by the Complementary Therapists Accredited Association. <br /> <br />The following meditations are a collection of my personal recordings for the purpose of unlocking your hidden potential. As I create more, I will post them here and on my youtube channel. <br /> <br /> May you find everlasting peace 🙇🏾‍♂️</h5>
            <div className='meditations-container'>
                {renderMeditations()}
            </div>
        </div>
    )
}
