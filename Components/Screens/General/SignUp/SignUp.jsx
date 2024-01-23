import { ServiceFieldset } from "@/Components/Molecules/ServiceFieldset/ServiceFieldset"
import { PersonalFieldset } from "@/Components/Molecules/PersonalFieldset/PersonalFieldset"
import { AccountFieldSet } from "@/Components/Molecules/AccountFieldSet/AccountFieldSet"
import { PaymentSection } from "@/Components/Molecules/PaymentSection/PaymentSection"

export const SignUp = () => {
    return (
        <div className="px-64">
            <h1 className="text-center text-3xl text-text my-12">Contrata el servicio</h1>

            <ServiceFieldset />

            <h2 className="text-xl text-text mt-12 mb-6">Datos personales</h2>

            <PersonalFieldset />

            <h2 className="text-text text-xl mt-12 mb-6">Datos de la cuenta</h2>

            <AccountFieldSet />

            <PaymentSection />

        </div>
    )
}
