import React from "react";
import { useLocation } from 'react-router-dom';
import { Gallery } from "../../components/Gallery";

//icons
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Wing = () => {
    const location = useLocation()

    const { name, aboutExtended, members, gallery } = location.state;

    return (
        <div>
            <div className="intro-secondary flex gap-12 justify-start z-1 flex-col md:flex-row px-5 ">
                <div className="w-full md:w-40 text-white">
                    <p className="text-[2rem] md:text-[3rem] font-[800]">{name[0].toUpperCase() + name.slice(1)}</p>
                </div>
            </div>

            <div className="wing-body px-10 md:px-52">
                {/* about */}
                <div className='about py-8'>
                    <h2 className='text-2xl md:text-3xl font-extrabold mb-4'>About</h2>
                    <p>{aboutExtended}</p>
                </div>

                {/* wing members */}
                <div className='wing-members py-8'>
                    <h2 className='text-2xl md:text-3xl font-extrabold mb-4'>Wing Members</h2>
                    <div className='wing-lead flex justify-center'>
                        <MemberCard
                            name={members[0].name}
                            designation={members[0].designation}
                            socials={members[0].socials}
                        />
                    </div>
                    <div className='flex gap-4 flex-wrap justify-evenly'>
                        {members.slice(1).map((item, index) => {
                            return (<>
                                <MemberCard
                                    key={index}
                                    name={item.name}
                                    designation={item.designation}
                                    socials={item.socials}
                                />
                            </>)
                        })}
                    </div>
                </div>

                {/* gallery */}
                <div className='gallery py-8'>
                    <h2 className='text-3xl font-extrabold mb-4'>Gallery</h2>
                    <div>
                        <Gallery data={gallery} />
                    </div>
                </div>
            </div>
        </div>
    )
}



const MemberCard = ({ name, designation, socials }) => {
    return (<>
        <style>
            {`
            .our-team {
            padding: 20px 0 55px;
            margin-bottom: 20px;
            background-color: #f7f5ec;
            text-align: center;
            overflow: hidden;
            position: relative;
            }

            .our-team .picture {
            display: inline-block;
            height: 130px;
            width: 130px;
            margin-bottom: 20px;
            z-index: 1;
            position: relative;
            }

            .our-team .picture::before {
            content: "";
            width: 100%;
            height: 0;
            border-radius: 50%;
            background-color: #1369ce;
            position: absolute;
            bottom: 135%;
            right: 0;
            left: 0;
            opacity: 0.9;
            transform: scale(3);
            transition: all 0.3s linear 0s;
            }

            .our-team:hover .picture::before {
            height: 100%;
            }

            .our-team .picture::after {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #1369ce;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            }

            .our-team .picture img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            transform: scale(1);
            transition: all 0.9s ease 0s;
            }

            .our-team:hover .picture img {
            box-shadow: 0 0 0 14px #f7f5ec;
            transform: scale(0.7);
            }

            .our-team .social {
            display: flex;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            background-color: #1369ce;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 0.5s ease 0s;
            }

            .our-team:hover .social {
            bottom: 0;
            }

            .our-team .social li a {
            display: block;
            padding: 10px;
            font-size: 17px;
            color: white;
            transition: all 0.3s ease 0s;
            text-decoration: none;
            }

            .our-team .social li a:hover {
            color: #1369ce;
            background-color: #f7f5ec;
            }
        `}
        </style>

        <div className="our-team rounded-xl w-full md:w-[15rem] flex-shrink-0 border-t-2 border-l-2 border-t-sky-300 border-l-sky-300 shadow-lg shadow-blue-300">
            <div className="picture">
                <img className="img-fluid" alt='img' src="https://picsum.photos/130/130?image=1027" />
            </div>
            <div className="team-content flex flex-col gap-1">
                <h3 className="name text-2xl font-bold">{name}</h3>
                <h4 className="title text-[#4e5052]">{designation}</h4>
            </div>
            <ul className="social">
                <li ><a href={socials.insta} aria-hidden="true"><AiFillInstagram height={"100%"} /></a></li>
                <li><a href={socials.github} aria-hidden="true"><FaGithub /></a></li>
                <li><a href={socials.linkedin} aria-hidden="true"><FaLinkedinIn /></a></li>
            </ul>
        </div>
    </>)
}

export default Wing;