export class OnlineCourse {

    constructor(
        public courseName :string,
        public MaxStudent:number,
        private _enrolledStudents:number = 0,
        private _isOpen : boolean = true
    ){}

    public enroll():boolean{
        if(this.canEnroll()){
            this._enrolledStudents += 1;
            return true;
        }
        return false
        }

    public closeCourse():void{
        this._isOpen = false
            
        }

    

    public getAvailableSeats():number{
        return this.MaxStudent - this._enrolledStudents
        
    }

    public getCourseStatus():string{
        if(this._isOpen === false){
            return `Closed`
        }
        return `Open`
    }

    private canEnroll():boolean{
        return this._isOpen && this._enrolledStudents < this.MaxStudent
        
}
}



// - **Attributes**:
//   - `courseName` (string): ชื่อคอร์ส (public)
//   - `maxStudents` (number): จำนวนนักเรียนสูงสุด (public)
//   - `enrolledStudents` (number): จำนวนนักเรียนที่ลงทะเบียนแล้ว (private)
//   - `isOpen` (boolean): สถานะของคอร์ส (private)

// - **Constructor**:
//   - รับค่า `courseName` และ `maxStudents` มากำหนดค่าเริ่มต้น
//   - กำหนดค่าเริ่มต้น `enrolledStudents` เป็น 0 จะเพิ่มขึ้นเมื่อมีการลงทะเบียนเรียน
//   - กำหนดค่าเริ่มต้น `isOpen` เป็น true จะปิดเมื่อมีการปิดคอร์สเรียน

// - **Methods**:
//   - `enroll()`: boolean
//     - สำหรับลงทะเบียนเรียน
//     - Return `true` ถ้าลงทะเบียนสำเร็จ, `false` ถ้าลงทะเบียนไม่สำเร็จ
//   - `closeCourse()`: void
//     - สำหรับปิดคอร์สเรียน
//   - `getAvailableSeats()`: number
//     - Return จำนวนที่นั่งที่เหลือ
//   - `getCourseStatus()`: string
//     - Return สถานะของคอร์ส ("Open" หรือ "Closed")
//   - `canEnroll()`: boolean (private)
//     // - เช็คว่าสามารถลงทะเบียนได้หรือไม่