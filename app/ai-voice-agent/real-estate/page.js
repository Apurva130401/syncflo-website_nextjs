'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function RealEstateAgent() {
    const data = industryData['real-estate']

    return <VoiceAgentLanding data={data} />
}
