import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromTheCard } from '../../slice/cardSlice'

const Card = ({open, setOpen}) => {
    const {card, totalPrice} = useSelector(state => state.card)
    const dispatch = useDispatch()

    return (
        <div>
            {card.length === 0 ? (
                <div>
                    <Dialog open={open} onClose={setOpen} className="relative z-10">
                        <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                        />
            
                    <div className="fixed inset-0 z-10  mx-auto my-auto overflow-y-auto pl:w-[50vw] w-[100vw]">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-[80vw] ">
                                <div className="mt-3 text-left sm:ml-4 sm:mt-0">
                                <DialogTitle as="h3" className="text-3xl font-titleFont font-semibold text-gray-900 border-b-2">
                                    Your Bag
                                </DialogTitle>
                                </div>
                                <p className='mt-2'>No product Your card! Please! buy new product.</p>
                                <h4 className='mt-2 font-titleFont'>Total Price: {totalPrice}$</h4>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            
                            </div>
                        </DialogPanel>
                        </div>
                    </div>
                    </Dialog>
                </div>
            ) : (
                <div>
                    <Dialog open={open} onClose={setOpen} className="relative z-10">
                        <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                        />
            
                    <div className="fixed inset-0 z-10  mx-auto my-auto overflow-y-auto pl:w-[50vw] w-[100vw]">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="mt-3 text-left sm:ml-4 sm:mt-0">
                                <DialogTitle as="h3" className="text-3xl font-titleFont font-semibold text-gray-900 border-b-2">
                                    Your Bag
                                </DialogTitle>
                                </div>
                                {card.map((item, ind) => (
                                    <div className='flex justify-around items-start gap-4 my-6 border-b-2 pb-4'>
                                        <div className='w-[120px] h-[200px]'>
                                            <img src={item.img} alt="rasm" className='rounded-md' />
                                        </div>
                                        <div className='w-1/3 pl:block hidden'>
                                            <h2 className='text-2xl font-bold font-titleFont'>{item.name}</h2>
                                            <p className='font-normal text-balance'>{item.text}</p>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold font-sans m-2'>Selected Size: {item.size}</h3>
                                            <h3 className='font-semibold font-sans m-2'>Selected color: <span style={{background: item.color}} className='px-2.5 ml-3 rounded-full'></span></h3>
                                            <h3 className='font-semibold font-sans m-2'>Ammount: {item.ammount}</h3>
                                            <h3 className='font-semibold font-sans m-2'>Single item price: {item.price}$</h3>
                                            <h3 className='font-semibold font-sans m-2'>Total Item price: {item.totalPrice}$</h3>
                                            <button
                                            type="button"
                                            onClick={() => dispatch(removeFromTheCard(item))}
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <h4 className='mt-6 font-titleFont'>Total Price: {totalPrice}$</h4>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            
                            </div>
                        </DialogPanel>
                        </div>
                    </div>
                    </Dialog>
                </div>
            )}
        </div>
  )
}

export default Card