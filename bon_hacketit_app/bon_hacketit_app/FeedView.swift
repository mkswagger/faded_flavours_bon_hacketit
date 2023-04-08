//
//  FeedView.swift
//  bon_hacketit_app
//
//  Created by Shinjan Patra on 09/04/23.
//

import SwiftUI

struct FeedView: View {
    var body: some View {
        VStack{
            HeaderView()
            
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background{
            Color("colour2")
                .ignoresSafeArea()
        }
    }
    @ViewBuilder
    func HeaderView()->some View{
        HStack{
            Button{
                
            }label: {
                HStack(spacing: 10){
                    Image("pic")
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 35, height: 35)
                        .clipShape(Circle())
                    Text("Shinjan")
                        .font(.system(size: 14,weight: .semibold))
                        .foregroundColor(.black)
                }
            }
        }
    }
}

struct FeedView_Previews: PreviewProvider {
    static var previews: some View {
        FeedView()
    }
}
