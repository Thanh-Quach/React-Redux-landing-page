import { isMobile } from "react-device-detect";


function About () {
    const headerImg: CSSProperties = {
        backgroundImage: 'url(./assets/teacher_resources.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };
    return(
        <div>
            <div className='position-relative' style={{height: '50vh'}}>
                <div className='w-100 h-100' style={headerImg}>
                    <div className='shadow-overlay w-100 h-100 d-flex align-items-center justify-content-center'>
                        <h1>About Us</h1>
                    </div>
                </div>
            </div>
            <div className='w-75 mx-auto my-5 pt-5 text-left'>
                <h5>Who are we?</h5>
                <p className={`mb-5 ${isMobile? '':'ps-5'}`}>Epenclass is a learning management system crafted in Vancouver, British Columbia, Canada. We are an educational organization that is committed to helping students create a brighter future through education, no matter what challenges the students may face. Over 20 years, Epenclass has developed a rich library of resources, arsenal of education techniques, and robust educational softwares to support us in this mission.</p>

                <h5>What is Epenclass for Learners?</h5>
                <p className={`mb-5 ${isMobile? '':'ps-5'}`}>Epenclass for learners allows students to leave paperwork behind, and complete their learning tasks anytime, anywhere. Students can upload pdfs or pictures of their schoolwork, and instantly dive into working on a digital copy that saves instantly to the cloud. Furthermore, Epenclass offers a rich library of practice materials and test-prep materials for specialized markets, ensuring students have access to highly relevant learning content in the palm of their hand. Students can instantly view answers with a simple left swipe, and access scrap paper with a right swipe. These features ensure an unparalleled ease-of-workflow experience not yet seen in the market, providing students the distraction-free environment they need for truly effective learning. Leave behind damaged sheets, stuffed binders, and bulky workbooks.</p>

                <h5>What Is Epenclass for Teachers?</h5>
                <p className={`mb-5 ${isMobile? '':'ps-5'}`}>Epenclass is an all-in-one educational powerhouse for organizing your class and completing day-to-day learning tasks. Integrating digital handwriting and share-editing, Epenclass enables students and teachers to work over the internet as if they are side by side, in the same room, writing on the same piece of paper. In-app tools allow instructors to selectively release an answer key to students, and view it themselves for expedient grading. Digital scrap paper provides students a quick way to do extra work right beside their main worksheet. That’s not to mention built-in calculators, graphing tools, and countless other learning instruments. EpenClass helps subvert the question “when am I ever going to use this in real life?” and instead has students asking “what’s stopping me from being better than I was yesterday?”.</p>

                <h5>What Is EpenTutor?</h5>
                <p className={`mb-5 ${isMobile? '':'ps-5'}`}>Epentutor is the next-level Epenclass experience. Merging the expertise of highly-qualified tutors and the interactive power of the Epenclass platform, Epentutor enables students to tap into the support they need to become the most exceptional versions of themselves. With incredibly flexible hours, students (or their parents/guardians) can register to remotely receive tutoring on the subject they need the most help with. With the Epenclass app, tutors can provide the same level of personal attention and assistance as in-person lessons, without the need for transit-time, or the expensive rates of in-home tutors.</p>

                <h3 className='text-center my-5 py-5'>SEEING IS BELIEVING!</h3>
            </div>
        </div>
    )
}

export default About