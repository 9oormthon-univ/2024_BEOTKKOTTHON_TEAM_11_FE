import React from 'react'
import ProcessTitle from '../components/ProcessTitle'

function Intro() {
  return (
    <div>
      <ProcessTitle num="1" title="쉽고 간편한 밥약 생성" text="간편한 UI를 통해 쉽고 편하게 밥약을 만들수 있어요!!"/>
      <ProcessTitle num="2" title="밥약 상태별 관리" text="상태별 페이지를 통해 여러 밥약도 손쉽게 파악 가능해요!"/>
      <ProcessTitle num="3" title="링크를 통해 밥약 공유" text="링크를 통해 만든 밥약을 공유하고 초대할 수 있어요!"/>
      <ProcessTitle num="4" title="보은 밥약 생성" text="보은하기를 통해 즐거웠던 밥약을 다시 만들 수 있어요!"/>
    </div>
  )
}

export default Intro
