import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadLessons } from '@actions/lesson.actions'
import Lesson from '@components/lesson';

const IndexPage = ({ lessons, page, loadLessons$ }) => {
    const statBoxInfo = {
        api_hits: 1789,
        app_views: 864,
        reports_read: 325
    }
    const [paymentIndex, setPaymentIndex] = useState(0)

    useEffect(() => {
        if (page === -1) {
            loadLessons$({ page: 0 }).then(lessons => { console.log('Loaded initial lessons'); })
        }
        return () => { }
    }, [])
    const handleOnScroll = (e) => {
        const delta = 0;
        const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight - delta;
        if (bottom) {
            console.log('scrolled down');
            loadLessons$({ page: page + 1 });
        }
    }
    return (
        <div className="overflow-auto h-screen" id="index-page" onScroll={handleOnScroll}>
            <h1 className="text-center text-grey text-2xl mt-10">Next.js Example for Thomas</h1>
            <p className="text-center my-3 text-black-100">{lessons.length} lessons loaded</p>
            <div className="mx-auto max-w-2xl mt-8">
                {
                    lessons && lessons.map((lesson, i) => (
                        <Lesson {...lesson} key={i} />
                    ))
                }
            </div>

        </div>
    )
}
const mapStateToProps = state => ({
    lessons: state.lesson.lessons,
    page: state.lesson.page,
});
const mapDispatchToProps = {
    loadLessons$: loadLessons,
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
