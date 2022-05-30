import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Calendar1() {
  let  type="text/javascript">
         (function () {
             ('#datetimepicker2').datetimepicker({
                 locale: 'ru'
             });
         });
    

    return (
        <div class="container">
   <div class="row">
      <div class='col-sm-6'>
         <div class="form-group">
            <div class='input-group date' id='datetimepicker2'>
               <input type='text' class="form-control" />
               <span class="input-group-addon">
               <span class="glyphicon glyphicon-calendar"></span>
               </span>
            </div>
         </div>
      </div>
      
   </div>
</div>
    )

    }