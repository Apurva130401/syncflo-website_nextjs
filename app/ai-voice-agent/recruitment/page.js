'use client'

import { industryData } from '../data'
import VoiceAgentLanding from '../../../components/VoiceAgentLanding'

export default function RecruitmentAgent() {
    const data = industryData['recruitment']

    return <VoiceAgentLanding data={data} />
}
