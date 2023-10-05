"use client"

import PasswordChecklist from "@/components/PasswordChecklist"

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-blue-950 ">
        <div className="min-h-screen flex justify-center">
          <div className="flex justify-center self-center z-10">
            <div className="p-8 bg-white rounded-lg w-[450px]">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Password Checklist{" "}
                </h3>
              </div>
              <form onSubmit={() => {}} className="flex flex-col">
                <PasswordChecklist
                  hasSpecialChar={true}
                  hasNumber={true}
                  hasUppercase={true}
                  hasNoConsecutiveLetters={true}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
