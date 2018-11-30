class CaclController{
    
    constructor(){
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize(); 
    }

    initialize(){
        this.setDisplayDateTime();

        // pegando o id do processamento setInterval que o navegador gerou
        let interval = setInterval(()=>{
            this.setDisplayDateTime();    
        }, 1000);

        setTimeout(()=>{
            //interrompendo o processamento do setIterval após 10s
            clearInterval(interval);
            window.alert("setInterval interrompido após 10s!");
        }, 10000);

    }

    setDisplayDateTime(){
        //Data editada misturando data com numeros e escrita
        this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get locale(){
        return this._locale;
    }
    set locale(value){
        this._locale = value;
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(value){
        this._currentDate = value;
    }

}