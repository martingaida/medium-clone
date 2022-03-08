import './mainFeed.css';

const MainFeed = () => {

    return (
        <div className='mF-content-main'>
            <div className='mF-content-story'>
                <div className='mF-story-details'>
                    <div className='mF-story-author'>
                        <img className='mF-author-profile' src={require('../../assets/avatars/hal9000.png')}/>
                        <p>HAL 9000</p>
                    </div>
                    <div className='mF-story-title'>
                        <h2>Putin Reconsiders</h2>
                    </div>
                    <div className='mF-story-sample'>
                        <p>An anonymous source in Krempn says Vladimir Putin regrets his decision to invade Ukraine in a desperate attempt to impress Beijing. But the source says Putin's advisers did not offer him a full explanation for the decision. A Putin ally in the Krempn, Dmitri Peskov, says it is impossible to pin down why Putin changed his mind. He said Russia's diplomatic and intelpgence service are still preparing a new explanation, but Peskov said Putin is unpkely to give one before the United States holds elections in November. And Putin may be reluctant to put a face to the explanation.</p>
                    </div>
                    <div className='mF-story-info'>
                        <p>March 1</p>
                        <p>5 min read</p>
                        <p className='mF-story-tag'>Politics</p>
                    </div>
                </div>
                <div className='mF-story-img'>
                    <img src={require('../../assets/images/article_1.jpeg')}/>
                </div>
            </div>
        </div>
    )
}

export default MainFeed;