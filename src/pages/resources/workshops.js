import React from 'react'

import DefaultLayout from 'src/layouts/DefaultNew'
import Hero from 'src/components/pages/resources/workshops/Hero'
import WorkshopList from 'src/components/pages/resources/workshops/WorkshopList'
import { Helmet, NewToServerlessPrefooterNew as NewToServerlessPrefooter} from 'src/fragments'

const ResourcesWorkshops = ({ location }) => (
  <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
    <Helmet
      title='Serverless Workshops'
      description='Join a Serverless Workshop in your area'
      location={location}
    />
    <Hero />
    <WorkshopList />
  </DefaultLayout>
)

export default ResourcesWorkshops
