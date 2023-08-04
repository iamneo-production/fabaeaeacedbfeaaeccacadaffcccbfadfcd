import { Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'currencypipe'
})
export class CurrconvPipe implements PipeTransform{
    resValue=0;
    usd =  { "id":"USD", "value": 1.126735};
    gbp=  { "id":"GBP", "value":0.876893};
    inr=  { "id":"INR", "value":79.677056};
    transform(fromCurrency: any, toCurrency: any, amount:any ) {
        if(fromCurrency==toCurrency){
            return amount;
        }
        if(fromCurrency==this.usd.id){
            if(toCurrency==this.gbp.id){
              this.resValue = (amount/this.usd.value)*this.gbp.value;
              this.resValue = Math.round(this.resValue);
              return this.resValue;
            }
            if(toCurrency==this.inr.id){
                this.resValue= (amount/this.usd.value)*this.inr.value;
                this.resValue = Math.round(this.resValue);
                return this.resValue;
            }
        }
        if(fromCurrency==this.gbp.id){
            if(toCurrency==this.usd.id){
                this.resValue= (amount/this.gbp.value)*this.usd.value;
                this.resValue = Math.round(this.resValue);
                return this.resValue;
            }
            if(toCurrency==this.inr.id){
                this.resValue= (amount/this.gbp.value)*this.inr.value;
                this.resValue = Math.round(this.resValue);
                return this.resValue;
            }
        }
        if(fromCurrency==this.inr.id){
            if(toCurrency==this.usd.id){
                this.resValue= (amount/this.inr.value)*this.usd.value;
                this.resValue=Math.round(this.resValue);
                return this.resValue;
            }
            if(toCurrency==this.gbp.id){
                this.resValue= (amount/this.inr.value)*this.gbp.value;
                this.resValue = Math.round(this.resValue);
                return this.resValue;
            }
        }
    }
}