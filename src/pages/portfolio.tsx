import React from 'react'
import Header from '@/components/header'
import ProfileCard from '@/components/profileCard'
import ProfileInfo from '@/components/profileInfo'
import SendEmail from '@/components/sendEmail'
import Career from '@/components/career'

const PortfolioPage = () => {
    return (
        <>
            <div className=" bg-cover shrink-0  bg-center bg-[url('/images/new_background.jpg')] bg-no-repeat overflow-scroll  justify-center w-screen h-screen">
                {/* 맨 윗줄 메뉴 박스 */}
                <Header />
                {/* 메인 바디 시작점 */}
                {/* 프로필 카드 */}
                <ProfileCard />
                {/* 프로필 정보 */}
                <ProfileInfo />
                {/* 스택 및 이력 소개 */}
                <Career />
                {/* 이메일 보내기 */}
                <SendEmail />
            </div>
        </>
    )
}

export default PortfolioPage
