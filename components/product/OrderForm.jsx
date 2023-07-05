import { useState } from 'react';
import { useRouter } from 'next/router';



export default function OrderForm() {

    const router = useRouter();
    const [userOrder, setUserOrder] = useState({
        phoneNumber: "",
        address: "",
        pickupDate: "",
        deliveryDate: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:1337/api/order-services', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userOrder.username,
                phoneNumber: userOrder.phoneNumber,
                pickupDate: userOrder.pickupDate,
                deliveryDate: userOrder.deliveryDate,
                address: userOrder.address,
            }),
            method: 'POST',
            }
        );
        const data = await response.json();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserOrder({...userOrder, [name]: value});
    }


    return (
        <form onSubmit={onSubmit} className="w-full " action="">
            <div className="flex gap-x-14 ">
                <div>
                    <label htmlFor="nama">Nama</label>
                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" disabled />
                </div>
                <div className="">
                    <label htmlFor="NomorHp">Nomor Hp</label>
                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="text" />
                </div>
            </div>

            <div className="pt-11">
                <label htmlFor="">Alamat Lengkap</label>
                <input className="w-full h-16 p-2.5 rounded-xl border-2 border-gray-400" type="text" />
            </div>

            <div className="flex gap-x-14 pt-11">
                <div>
                    <label htmlFor="nama">Tanggal Diambil</label>
                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="date" />
                </div>
                <div className="">
                    <label htmlFor="NomorHp">Tanggal Dikirim</label>
                    <input className="w-72 h-8 p-2.5 rounded-xl border-2 border-gray-400 " type="date" />
                </div>
            </div>

            <div className="pt-11">
                <label htmlFor="">Kecamatan</label>
                <input className="w-full h-8 p-2.5 rounded-xl border-2 border-gray-400" type="text" />
            </div>

            <div className="pt-11">
                <button className="bg-green-600 w-32 h-10 rounded-2xl text-white">
                    Pesan
                </button>
            </div>
        </form>
    )

}