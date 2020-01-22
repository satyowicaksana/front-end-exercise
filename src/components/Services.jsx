import React from 'react'
import './Services.scss'

const tiles = [
  {
    title: 'Consult',
    description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
  },
  {
    title: 'Design',
    description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
  },
  {
    title: 'Develop',
    description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
  },
  {
    title: 'Marketing',
    description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
  },
  {
    title: 'Manage',
    description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
  },
  {
    title: 'Evolve',
    description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
  },
]
export default () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <h1>How Can I Help You?</h1>
          <h3>
            Our work then targeted, best practices outcomes social innovation synergy.
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
            program areas scale.
          </h3>
          <div className="tiles">
            {
              tiles.map(tile => (
                <div key={tile.title} className="tile-container">
                  <div className="tile">
                    <h2>{tile.title}</h2>
                    <p>{tile.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}