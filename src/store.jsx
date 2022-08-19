import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
// Model the application state.
class Timer {
    statusDisplay = false
    coust = 0
    SumProduct = 0
    render = true
    PRODUCT_render = true
    numberProduct = 0
    total = 0
    totalProduct
    data 
    check= false;

    constructor() {
        makeAutoObservable(this)
    }
    setRender(){
        this.render = !this.render
    }
    setPRODUCTRender(){
        this.PRODUCT_render = !this.PRODUCT_render
    }
    setCheck(){
        this.check= !this.check
    }

    changeDis() {
        this.statusDisplay = !this.statusDisplay
    }

    coustProduct() {
        this.coust += 1
    }
       
    setNum(e){
        this.numberProduct = e
    }
    SetSum(e){
        this.SumProduct = e
    }
    setTotal(e){
        this.total= e
    }
    setTotalProduct(e){
        this.totalProduct= e
    }
    setData(e){
        this.data = e
    }
}

const store = new Timer()
export default store